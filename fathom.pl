#!/usr/bin/perl -w 
use strict;
use Lingua::EN::Fathom;

my $text = new Lingua::EN::Fathom;

my $dir = '.';
opendir (DIR, $dir) or die $!;
while (my $file = readdir(DIR))
{
	$text->analyse_file("$file");
	print $text->report;
	print '-'x70, "\n";
}