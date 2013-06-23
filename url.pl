#!/usr/bin/perl -w
use strict;

my $url = '';
# $url = 'http://news.xinhuanet.com/english/world/2013-06/22/c_124894434.htm';
# $url = 'http://english.peopledaily.com.cn/90777/8294968.html';
# $url = 'http://www.ecns.cn/2013/06-21/69606.shtml';
$url = 'http://www.ecns.cn/military/2013/06-22/69641.shtml';

print "match\n" if $url =~ 
#m!^http\://news\.xinhuanet\.com/english/[a-z]+/\d{4}\-\d{2}/\d{2}/c_\d{9,}\.htm$!i;
#m!^http\://english\.peopledaily\.com\.cn/\d{5}/\d{7}\.html$!i;
m!^http\://www\.ecns\.cn/([a-z]+/)?\d{4}/\d{2}-\d{2}/\d{5}\.shtml$!i;
