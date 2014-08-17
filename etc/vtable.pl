#!/usr/bin/perl -w
use strict;

# this script uses the folloing files:
# - cap.txt (from IOS/IEC 18004:2000(E) Section 8.1 Table 1)
# - cci.txt (from ISO/IEC 18004:2000(E) Section 8.4 Table 3)
# - align.txt (from ISO/IEC 18004:2000(E) Annex E table E.1)
# to generate a JavaScript table of version objects.
#
# Written in perl for the sake of haste.

open(CAP, 'cap.txt');
open(CCI, 'cci.txt');
open(ALIGN, 'align.txt');

print "var QR__Versions = new Array(\n".
	"\t{ ver: null, dim: null, align: null },\n";

while (1) {
	my $line = <ALIGN>;
	my @align = split / /, $line;
	my $aligns = join ',', @align[2..@align-1];
	chomp $aligns;
	
	$line = <CAP>;
	chomp $line;
	my @cap = split / /, $line;
	
	$line = <CCI>;
	chomp $line;
	my @cci = split / /, $line;
	
	if ($cap[0] != $cci[0] || $cap[0] != $align[0]) {
		print "Table files are corrupted!\n";
		exit;
	}
	
	print "\t{ ".
		"ver: $align[0], dim: $cap[1], align: new Array($aligns), ".
		"cciNum: $cci[1], cciAlNum: $cci[2], cci8Bit: $cci[3], cciKanji: $cci[4] ".
		"}";
	
	if (eof(ALIGN)) {
		last;
	}
	
	print ",\n";	
}

print "\n);\n";

close(CAP);
close(CCI);
close(ALIGN);