# Proof of concept around CORS in IE

IE8 came with a proprietary object call XDomainRequest, it is supposed to have some kind of support for CORS.  
According to this [article][http://blogs.msdn.com/b/ieinternals/archive/2010/05/13/xdomainrequest-restrictions-limitations-and-workarounds.aspx] this object is pretty much useless.  
It is full of restriction and require so much hacking that using a proxy is sadly still the best way to go. 
This is a bunch of test to figure out how much IE sucks.