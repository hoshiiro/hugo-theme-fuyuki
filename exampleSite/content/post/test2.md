---
title: "Shortcodes"
date: 2022-06-13T03:55:30Z
draft: false
code: true
series: "fuyuki"
tags: ["hugo"]
hidden: false
---

A brief example of my few "custom" shortcodes that i make for this theme.
<!--more-->
## Image

```
{{</* imgcard caption="<caption>" ph="<image height>(px,em)" src="<image url>" */>}}
```

{{< imgcard caption="Warusupaito" ph="175px" src="https://cdn.jsdelivr.net/npm/canaiira-assets/img/warspite.webp" >}}

## Posts referencing / linking

```
{{</* link file-name */>}}
```

Example: {{< link about >}}

You have a post with the same file name? No problem.

```
{{</* link file-name section */>}}
```

Example: {{< link post about >}} 

Notice that the second link lead you to about page inside the post section rather than the actual about page.

## Codeblock

{{< highlight python >}}
class me:

  def go_say(message):
    print(text)

# best waif
cunny = "Perseus"

if cunny == "Perseus":
  me.go_say("UWOOOOGGGHHH") # always happen
else:
  me.go_say("hmm") # another cunnies? SUS
{{< /highlight >}}

## Spotify:

```
{{</* spotify url="<normal-share-url>" */>}}
```

Example with the share url set to: `https://open.spotify.com/track/6115WGUBGHmLl3s22fHDkF?si=hcz15xoGRb6TBUvlk7DUZw&utm_source=copy-link`

{{< spotify url="https://open.spotify.com/track/6115WGUBGHmLl3s22fHDkF?si=hcz15xoGRb6TBUvlk7DUZw&utm_source=copy-link" >}}

## Soundcloud: 

```
{{</* soundcloud url="<track-url>" */>}}
```

Example with the track url set to: `https://soundcloud.com/ats024/nnrr0012-xfd`

{{< soundcloud url="https://soundcloud.com/ats024/nnrr0012-xfd" >}}

Gist test
<!--{{< gist hoshiiro 2dce9b5f3276679a07ff267e9b0886af >}}-->
