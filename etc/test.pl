#!/usr/bin/perl -w
use strict;

open(ALIGN, 'align.txt');
open(CAP, 'cap.txt');

print "var QRVersions = new Array(\n\t{ ver: null, dim: null, align: null },\n";

while (1) {
	my $line = <ALIGN>;
	my @align = split / /, $line;
	my $aligns = join ',', @align[2..@align-1];
	chomp $aligns;
	
	$line = <CAP>;
	my @cap = split / /, $line;
	
	print "\t{ ver: $align[0], dim: $cap[1], align: new Array($aligns) }";
	
	if (eof(ALIGN)) {
		last;
	}
	
	print ",\n";	
}

print "\n);\n";

close(ALIGN);
close(CAP);