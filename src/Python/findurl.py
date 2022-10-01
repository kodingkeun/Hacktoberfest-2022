import re 
from urlextract import URLExtract

def fin(string):
    regex = r"(?i)\b((?:https?://|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'\".,<>?«»“”‘’]))"
    urls = re.findall(regex, string)
    return [x for x in urls]

def urls(string):
    rext = URLExtract()
    return rext.find_urls(string)
    
n = input("input some output> ")
#print(fin(n))
print(fin(n))
