BEGIN{ 
    FS=",";
    print "dem = {\"x\":720,\"y\":600,\"data\":["; 
}
NR==1{
    next;
}
NR==2{
    last = $3;
    next;
}
{
    printf "%s,", last;
    last = $3;
}
END{
    printf "%s]};", last;
}