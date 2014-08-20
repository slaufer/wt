#!/usr/bin/perl -w
use strict;

# generates GF(256) modulo 285 table.

print "1, ";

my $v = 1;
for (my $i=1; $i < 256; $i++) {
	$v *= 2;
	if ($v > 255) {
		$v ^= 285;
	}
	printf "%3d, ", $v;
}
