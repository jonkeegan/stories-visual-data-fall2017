# Notes on scraping

When trying to download a large series of images from a collection, one of the easiest approaches  is to simply look for a predictable pattern in the file name:

We'll be using Rolling Stone's "Coverwall" archive of their magazine's cover from 1967-2013: https://www.rollingstone.com/coverwall 

Here's a few of the large cover image URLs:
```
http://assets.rollingstone.com/coverwall/0205-cover-toc-x600.jpg
http://assets.rollingstone.com/coverwall/0315-cover-toc-x600.jpg
http://assets.rollingstone.com/coverwall/0633-cover-toc-x600.jpg
```
See the pattern?

We can very easily iterate through these URLs, and save them to a local directory

So, in the Terminal if you want to iterate through numbers, you can just type: 
```
echo {1..100}
```
which gives you: 

```1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59 60 61 62 63 64 65 66 67 68 69 70 71 72 73 74 75 76 77 78 79 80 81 82 83 84 85 86 87 88 89 90 91 92 93 94 95 96 97 98 99 100```

So we can use this trick for iterating through numbers to generate the filenames we need. 

In the Terminal, we can use a really useful downloading tool called `wget` that lets us use this iterattion command.

Make a folder on your Desktop (assuming you are on a Mac):
```
mkdir ~/Desktop/rolling-stone
```
The you "move" (change directory) into it:
```
cd ~/Desktop/rolling-stone
```

You can then download 999 images at a time:
```wget http://assets.rollingstone.com/coverwall/{1000..1500}-cover-toc-x600.jpg```

If you are using bash 4.0 or greater you could just do this (which would preserve the leading zeros):
```wget http://assets.rollingstone.com/coverwall/{0001..1500}-cover-toc-x600.jpg```
 
Looks like the highest number in the collection is 1223.

So in order to get the full set, you'd need to run each of these 4 commands:
```
// Grab images 0001-0009
wget http://assets.rollingstone.com/coverwall/000{1..9}-cover-toc-x600.jpg

// Grab images 0010-0099
wget http://assets.rollingstone.com/coverwall/00{10..99}-cover-toc-x600.jpg

// Grab images 0100-0999
wget http://assets.rollingstone.com/coverwall/0{100..999}-cover-toc-x600.jpg

// Grab images 1000-1223
wget http://assets.rollingstone.com/coverwall/{1000..1223}-cover-toc-x600.jpg
```

Boom. 1,223 images in a few seconds. 

Bonus trick. Make a GIF of 40 random covers!

This requires `imagemagick` to be installed. On a Mac you can install this quickly with Homebrew:
```
brew install imagemagick
```
Once that is installed you can run this: 
```
ls -d * | gshuf -n 40 > random.txt; convert -delay 10 @random.txt -resize x300 -loop 0 animation.gif
```
We'll go deeper into what is happening here in the next class. 










