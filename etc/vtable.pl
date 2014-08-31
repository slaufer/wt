#!/usr/bin/perl -w
use strict;

# this script uses the folloing files:
# - cap.txt (from ISO/IEC 18004:2000(E) Section 8.1 Table 1)
# - cci.txt (from ISO/IEC 18004:2000(E) Section 8.4 Table 3)
# - align.txt (from ISO/IEC 18004:2000(E) Annex E Table E.1)
# - ecc.txt (from ISO/IEC 18004:2000(E) Section 8.5 Tables 13-22)
# to generate a JavaScript table of version objects.
#
# Written in messy perl for the sake of haste.

open(CAP, 'cap.txt');
open(CCI, 'cci.txt');
open(ALIGN, 'align.txt');

my @vers;

while (1) {
	my $line = <ALIGN>;
	chomp $line;
	my @align = split / /, $line;
	
	$line = <CAP>;
	chomp $line;
	my @cap = split / /, $line;
	
	$line = <CCI>;
	chomp $line;
	my @cci = split / /, $line;
	
	$vers[$align[0]] = {};
	$vers[$align[0]]{ver} = $align[0];
	$vers[$align[0]]{dim} = $cap[1];
	$vers[$align[0]]{rem} = $cap[6];
	my @align2 = @align[2..@align-1]; # this is ugly
	$vers[$align[0]]{align} = \@align2;
	$vers[$align[0]]{cci} = { num => $cci[1], alNum => $cci[2], eightBit => $cci[3], kanji => $cci[4] };
	
	if (eof(ALIGN)) {
		last;
	}	
}

close(CAP);
close(CCI);
close(ALIGN);

open(VI, "vi.txt");
while (!eof(VI)) {
	my $line = <VI>;
	chomp $line;
	my @vi = split /\s+/, $line;
	
	$vers[$vi[0]]{vi} = $vi[1];
}
close(VI);

open(ECC, "ecc.txt");
read(ECC, my $file, -s ECC);
close(ECC);

# WELCOME TO REGEX HELL

while ($file =~ /(?<ver>\d+)\s+(?<wcount>(\d )?\d+)(?<eclevels>(\s+[LMQH]\s+(\d )?\d+(\s+\d+){1,2}(\s+\(\d+,\d+,\d+\)){1,2}){4})/g) {
	my $ver = $+{ver};
	my $wcount = $+{wcount};
	my $eclevels = $+{eclevels};
	$wcount =~ s/ //g;
	$eclevels =~ s/\n/ /g;
	
	$vers[$ver]{codewords} = $wcount;
	$vers[$ver]{ec} = {};
	
	while ($eclevels =~ /(?<eclevel>[LMQH])\s+(?<eccount>(\d )?\d+)(?<blockcounts>(\s+\d+){1,2})(?<blockdata>(\s+\(\d+,\d+,\d+\)){1,2})/g) {
		my $eclevel = $+{eclevel};
		my $eccount = $+{eccount};
		my $bc = $+{blockcounts};
		my $bd = $+{blockdata};
		
		$bc =~ s/(^\s+|\s+$)//g;
		$bd =~ s/(^\s+|\s+$)//g;
		
		my @blockcounts = split /\s/, $bc;
		my @blockdata = split /\s/, $bd;
		$eccount =~ s/ //g;
		
		$eclevel = quotemeta $eclevel;
		$vers[$ver]{ec}{$eclevel} = { ecwords => $eccount, groups => [] };
		
		for (my $i = 0; $i < @blockcounts; $i++) {
			$blockdata[$i] =~ /(?<wttl>\d+),(?<wdata>\d+),(?<eccap>\d+)/g;
			my $wttl = $+{wttl};
			my $wdata = $+{wdata};
			my $wecc = $wttl - $+{wdata};
			my $eccap = $+{eccap};

			$vers[$ver]{ec}{$eclevel}{groups}[$i] = { blocks => $blockcounts[$i], codewords => $wttl, datawords => $wdata, ecwords => ($wttl - $wdata), eccap => $eccap };
		}
	}
}

# write the table

print "/*\n"
	. " * QR Version Constant Table\n"
	. " */\n"
	. "\n"
	. "var QR__Ver = [\n\tfalse,\n";

for (my $i = 1; $i < @vers; $i++) {
	print "\t{\n"
		#. "\t\tver: $vers[$i]{ver},\n"
		. "\t\tdim: $vers[$i]{dim},\n"
		. "\t\tcodewords: $vers[$i]{codewords},\n"
		. "\t\trem: $vers[$i]{rem},\n"
		. "\t\talign: [".(join ',', @{$vers[$i]{align}})."],\n";
		
	if ($i >= 7) {
		print "\t\tvi: QR__b2ba(\"" .$vers[$i]{vi}. "\"),\n";
	}
		
	print "\t\tec: {\n";
	
	my @strings2;
	foreach my $eclevel (keys %{$vers[$i]{ec}}) {
		my $string = "\t\t\t$eclevel: {\n"
		           #. "\t\t\t\tdatawords: " . ($vers[$i]{codewords} - $vers[$i]{ec}{$eclevel}{ecwords}) . ",\n"
			       . "\t\t\t\tecwords: $vers[$i]{ec}{$eclevel}{ecwords},\n"
			       . "\t\t\t\tgroups: [\n";
			       
		for (my $j = 0; $j < @{$vers[$i]{ec}{$eclevel}{groups}}; $j++) {
			 $string .= "\t\t\t\t\t{\n"
			          . "\t\t\t\t\t\tblocks: $vers[$i]{ec}{$eclevel}{groups}[$j]{blocks},\n"
			          . "\t\t\t\t\t\tcodewords: $vers[$i]{ec}{$eclevel}{groups}[$j]{codewords},\n"
			          #. "\t\t\t\t\t\tdatawords: $vers[$i]{ec}{$eclevel}{groups}[$j]{datawords},\n"
			          . "\t\t\t\t\t\tecwords: $vers[$i]{ec}{$eclevel}{groups}[$j]{ecwords}\n"
			          #. "\t\t\t\t\t\teccap: $vers[$i]{ec}{$eclevel}{groups}[$j]{eccap}\n"
			          . "\t\t\t\t\t}";
			if ($j + 1 < @{$vers[$i]{ec}{$eclevel}{groups}}) {
				$string .= ",";
			}
			$string .= "\n";
		}
			
		$string .= "\t\t\t\t]\n"
			      ."\t\t\t}";
		push @strings2, $string;
	}
	print (join ",\n", @strings2);
	print "\n";
		
	print "\t\t},\n"
		. "\t\tcci: {\n"
		. "\t\t\tnum: $vers[$i]{cci}{num},\n"
		. "\t\t\talNum: $vers[$i]{cci}{alNum},\n"
		. "\t\t\teightBit: $vers[$i]{cci}{eightBit},\n"
		. "\t\t\tkanji: $vers[$i]{cci}{kanji}\n"
		. "\t\t}\n"
		. "\t}";
		
	if ($i + 1 < @vers) {
		print ",";
	}
		
	print "\n";
}

print "];\n";