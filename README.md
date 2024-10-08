## Maestro AI Programming Puzzle.

[Project Website:](https://maestro-gamma.vercel.app/)

## Instructions:

You will be provided links to download two files: data_small.txt and data_large.txt
Your task is to write a program that processes these files to solve the given problem.
After running your program on each file, enter the results into this form.
Ensure that you are signed into your Google account, as we will use this email to contact you regarding next steps.

Problem Description:

Write a program that reads a text file that contains 0's and 1's in a regular N x M sized grid. Here is an example of what a valid input file looks like:

0110

0100

0010

0011

After reading the file, your goal is to find the number of "connected shapes" in the data. A connected shape is defined as a group of 1's that are immediately adjacent to each other. The 1's must be immediately to the left, right, top, or bottom of each other to count as connected (diagonals do not count as connected).

In the example above, your program would return 2, because there are two connected shapes:

11

1

at position (0, 1) and

1

11

at position (2, 2)

You only need to return the number of connected shapes that you've found. You do not need to return the position of the shapes.

File links can be found under public folder

![screenshot](/public/preview.png)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start uploading a text file that contains 0's and 1' to see the real time number of connected shapes is. Examples are shown in file links above.
