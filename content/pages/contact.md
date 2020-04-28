---
template: ContactPage
slug: contact
title: Contact Us
featuredImage: 'https://ucarecdn.com/b73187b1-7f95-4948-ac8b-e0c2db0ccf30/'
subtitle: We would be pleased to here from you.
address: '404 James St, Burleigh Heads QLD 4220'
phone: 0987 123 456
email: example@example.com
locations:
  - lat: '-27.9654732'
    lng: '153.2432449'
    mapLink: ''
meta:
  description: This is a meta description.
  title: Contact Page
---

# Example contact form

This form is setup to use Netlify's form handling:

- the form action is set to the current absolute url: `action: '/contact/'`
- a name attribute is sent with the form's data `'form-name': 'Contact'`
- netlify data attributes are added to the form `data-netlify data-netlify-honeypot`

Find out more in the [Netlify Docs](https://www.netlify.com/docs/form-handling/).
