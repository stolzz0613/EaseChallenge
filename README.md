# Kitzbühel ski resort in Austria
> Let’s say you hopped on a flight to the Kitzbühel ski resort in Austria. Being a software engineer you can’t help but value efficiency, so naturally you want to ski as long as possible and as fast as possible without having to ride back up on the ski lift. So you take a look at the map of the mountain and try to find the longest ski run down.
In digital form the map looks like the number grid below.
44
4 8 73 2 5 93 6 3 25 4 4 16
The first line (4 4) indicates that this is a 4x4 map. Each number represents the elevation of that area of the mountain. From each area (i.e. box) in the grid you can go north, south, east, west - but only if the elevation of the area you are going into is less than the one you are in. I.e. you can only ski downhill. You can start anywhere on the map and you are looking for a starting point with the longest possible path down as measured by the number of boxes you visit. And if there are several paths down of the same length, you want to take the one with the steepest vertical drop, i.e. the largest difference between your starting elevation and your ending elevation.
On this particular map, the longest path down is of length=5 and it’s highlighted in bold below: 9-5- 3-2-1.
44
4 8 73 2593 6325 4 416
There is another path that is also length five: 8-5-3-2-1. However, the tie is broken by the first path being steeper, dropping from 9 to 1, a drop of 8, rather than just 8 to 1, a drop of 7.
Your challenge is to write a program to find the longest (and then steepest) path on the specified map in the format above. It’s 1000x1000 in size, and all the numbers on it are between 0 and 1500.


## Table of Contents
* [Prerequisites](#pre-requisites)
* [Back-End](#back-end)
* [Installing](#installing)

## Prerequisites
- Node.js
- npm (comes with Node.js)

## Installing
* Clone the repository
```
  git clone https://github.com/stolzz0613/EaseChallenge
```
* Install the dependencies
```
  cd front-challenge
  npm i
```
* Running the program
- For the back-end
```
  npm run start
```
The program will automatically read a file named 'map.txt' in the 'grids' directory.
- For the front-end
```
  npm run dev
```

## Back-End
* Configuration
- In order to change the file's name, We just need to change the name in main.js.
```
  manageFile.read('map.txt', grid => checkGrid(grid))
```
- If we want to update the .json file that is used in the frontend, We can uncomment the last lines in main.js, please be careful with this functionality, it could be really heavy to process in the front-end, it is recommended to use with small input grids.
