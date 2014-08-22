#!/usr/bin/perl -w
use strict;

# generates generator polynomials tables.
# this is the point when i stopped understand what was going on, and started
# translating the very detailed instructions provided by Carolyn Eby
# (http://www.thonky.com/qr-code-tutorial/error-correction-coding/) into code.
#
# seriously, without that tutorial, this entire library would not have been
# possible.
#
# math is hard, let's go shopping.

# used to find antilogs
sub ifind {
	my ($arr, $search) = @_;
	my $i;
	
	for ($i = 0; $i < @{$arr}; $i++) {
		if (${$arr}[$i] == $search) {
			last;
		}
	}
	
	return $i;
}

# begin by generating the GF(256) table
my @GF256 = ( 1 );
for (my $v = 1, my $i=1; $i < 256; $i++) {
	$GF256[$i] = $GF256[$i-1] * 2;
	if ($GF256[$i] > 255) {
		$GF256[$i] ^= 285;
	}
	
}

# now generate the generator polynomials table T(n) where n is the number of
# EC codewords to be used with the given polynomial
# keep in mind here that we're still operating on galois fields, so normal
# arithmetic doesn't apply

# T(0) does not exist, T(1) is 2^0*x^1 + 2^0*x^0
my @GPOLY = ( [], [ 0, 0 ] );

for (my $i = 2; $i <= 68; $i++) {
	# new factor for this polynomial: 2^(i-1)*x^1 + 2^0*x^0
	my @mul = ( $i - 1, 0 );
	my @output;
	
	# multiply the new factor by the previous generator polynomial
	for (my $j = 0; $j < @mul; $j++) {
		for (my $k = 0; $k < @{$GPOLY[$i-1]}; $k++) {
			# if the alpha goes out-of-field, it rolls over
			# i do not understand why this is mod 255 instead of mod 256
			my $alpha = $mul[$j] + $GPOLY[$i - 1][$k];
			if ($alpha > 255) {
				$alpha %= 255;
			}
			
			# if this is the first like-term for this degree, put (temporarily)
			# into the output so it with the other term for this degree later
			# note that because the new factor (@mul) has degree 1, there will
			# only ever be at most two like terms for any exponent of x.
			if (@output <= $j + $k) {
				push @output, $alpha;
			# if this is the second like-term for this degree, combine it with the first
			} else {
				$output[$j + $k] = ifind \@GF256, ($GF256[$output[$j + $k]] ^ $GF256[$alpha]);
			}
		}
	}
	
	$GPOLY[$i] = \@output;
}

# now puke out the tables, blanking the ones that won't be used
print "var QR__GenPoly = [\n";
for (my $i = 0; $i < @GPOLY; $i++) {
	if (($i > 17 && ($i & 1) == 1) || $i < 7 || (ifind [ 8, 9, 11, 12, 14 ], $i) != 5 ) {
		print "\tfalse,\n";
		next;
	}
	
	print "\t[";
	for (my $j = 0; $j < @{$GPOLY[$i]}; $j++) {
		print $GPOLY[$i][$j];
		if ($j + 1 < @{$GPOLY[$i]}) {
			print ",";
		}
	}
	print "]";
	if ($i + 1 < @GPOLY) {
		print ",";
	}
	print "\n";
}
print "];\n";
