# locate-equations-in-string

> Locate LaTeX-like equations in a string of text

## Introduction

Another attempt aimed at processing equations in markdown, except a little cleaner this time. The last attempt was relied heavily on [complicated regexes and ad-hoc markdown sorta-parsing](https://github.com/rreusser/gulp-markdown-equations). Here, the goal is to create a simple multi-purpose utility that does nothing more than procesing equations in a string of text. This is [not a trivial problem](https://github.com/cben/mathdown/wiki/math-in-markdown).

## To Do

1. Implement basic replacement/splitting
2. Decide on coherent return format
3. Handle corner cases, i.e. `$y = x^2 \hbox{ when $x > 2$}$`
4. Use in an [mdast](https://github.com/wooorm/mdast) plugin

## License

ISC License. (c) 2015, Ricky Reusser
