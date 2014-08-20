#!/usr/bin/perl -w
use strict;

# this script uses the folloing files:
# - cap.txt (from ISO/IEC 18004:2000(E) Section 8.1 Table 1)
# - cci.txt (from ISO/IEC 18004:2000(E) Section 8.4 Table 3)
# - align.txt (from ISO/IEC 18004:2000(E) Annex E Table E.1)
# to generate a JavaScript table of version objects.
#
# Written in perl for the sake of haste.

open(CAP, 'cap.txt');
open(CCI, 'cci.txt');
open(ALIGN, 'align.txt');

print "var QR__Versions = [\n".
	"\tfalse,\n";

# while-break loops make it easier to eliminate trailing separators.
while (1) {
	my $line = <ALIGN>;
	chomp $line;
	my @align = split / /, $line;
	my $aligns = join ',', @align[2..@align-1];
	
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
	
	print "\t{\n".
		"\t\tver: $align[0], dim: $cap[1], align: [ $aligns ],\n".
		"\t\tcci: { num: $cci[1], alNum: $cci[2], eightBit: $cci[3], kanji: $cci[4] }\n".
		"\t}";
	
	if (eof(ALIGN)) {
		last;
	}
	
	print ",\n";	
}

print "\n];\n";

close(CAP);
close(CCI);
close(ALIGN);