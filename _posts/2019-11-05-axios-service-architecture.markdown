---
layout: post
title:  "Axios services architecture"
date:   2019-11-05 10:18:00
categories: Axios js API REST
---

Thanks to [axios](https://github.com/axios/axios) we gain lots of power when it comes to executing and consuming API request, but  it don't gives us  any "ready to use" pattern how to use and structure them in correct way. So I like to share with you my approach about that.

I wan't to share with you my approach about how do I organize and implement services while using axios library.

In this post, I'm not going to cover basics about using axios services, and I assume you have got basic knowledge about axios and ES6 at least. 

The goal will be to create API service files structure which would fulfil the criteria:

* extendable, maintainable, readable.
* separate endpoints path group for separate files (/posts /comments)
* possibility to create and manage many root apis with different host url (many separate REST service), but still sharing functionality of each other (like interceptors). 
* adding interceptors for all services (i.e. global errors), particular one (endpoint specific errors), or even for particular endpoints
* support for migrating to newest API version (i.e https://api.exmaple.com/v2/* )


{% highlight javascript %}
const foo = () => {
    console.log('aaa');
}
{% endhighlight %}

Check out the [Jekyll docs][jekyll] for more info on how to get the most out of Jekyll. File all bugs/feature requests at [Jekyll's GitHub repo][jekyll-gh].

[jekyll-gh]: https://github.com/mojombo/jekyll
[jekyll]:    http://jekyllrb.com
