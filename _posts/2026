---
layout: post
title:  "Useful Linux snippets"
date:   2016-01-08
---

<p class="intro"><span class="dropcap">S</span>ome simple commands for bash that have been helpful in the past.</p>

{% highlight bash %}
# Adding a remote machine on docker-machine
# Note we specify btrfs as we are using that driver in docker for our remote machine
docker-machine -D create --driver generic --generic-ip-address <ip> --generic-ssh-key /a/b/x.pem --engine-storage-driver btrfs name-here 

# Search text, ignore case
grep -ri TEXT .

# Is port 8080 being used
netstat -vatn | grep 8080

# Give the last 500 lines of a log and follow it
tail -500f file.txt

# Which process is listening on port
netstat -tulpn

# Who is using all the ram?
ps --everyone --format=pid,vsz,comm= | sort --numeric-sort --key=2

# Change prompt
echo $PS1
\h:\W \u\$

# Replace in VI
:%s/search_string/replacement_string/g

# View packets 
tcpdump -nS

# time process living
ps -p $$ -o etime=

# list all iptables rules
iptables --list

#restart docker
sudo service docker restart

# tcpdump
sudo tcpdump host 172.17.0.3 -nS -i docker0

# Run loop
while sleep 1; do sudo  netstat -tulpn | grep 6100; done

# check what port range
sysctl -n net.ipv4.ip_local_port_range

# largest files in directory /var
du -a /var | sort -n -r | head -n 10
{% endhighlight %}
