# AGENTS.md

# Sri Kamatchi Electronics & Furnitures

This file defines the development rules for Cursor AI when working on this project.

---

# Project Stack

- Next.js (App Router)
- JavaScript (No TypeScript)
- Tailwind CSS
- next/image
- next/font
- Responsive Design
- SEO Friendly

---

# General Rules

- Never use inline CSS.
- Never use `<img>` tags.
- Always use `next/image`.
- Use JavaScript only.
- Use App Router only.
- Keep components reusable.
- Avoid duplicated code.
- Prefer composition over repetition.
- Use Tailwind utilities before writing custom CSS.
- Only keep design tokens inside `globals.css`.
- Keep code production-ready.
- Use semantic HTML.
- Follow mobile-first responsive development.

---

# Folder Structure

app/
components/
data/
hooks/
lib/
public/
public/products/
styles/

Do not create unnecessary folders.

---

# Theme

Background
#FBFAF8

Primary
#8B1E1E

Accent
#D4A017

Heading
#1F1F1F

Body
#5B5B5B

Radius

rounded-xl

Cards

shadow-sm
hover:shadow-md

Buttons

Primary
Maroon

Secondary
Gold Outline

---

# Fonts

Use next/font.

Primary

Inter

Fallback

Poppins

Tamil Fallback

Noto Sans Tamil

---

# Layout

Every page should contain

Header

Main Content

Footer

Floating Contact Buttons

---

# Header

Sticky

Contains

Logo

Navigation

Call Button

Mobile Menu

---

# Footer

Include

Business Name

GST

Phones

Addresses

Quick Links

Brand Logos

Copyright

---

# Components

Create reusable components only.

Required

Header

Footer

Hero

HeroSlider

SectionHeading

CategoryCard

ProductCard

ComboCard

OfferCard

PriceTag

BrandStrip

TrustBadges

Testimonials

LocationCard

ContactForm

SearchBar

CategoryTabs

FloatingContact

WhatsAppButton

CallButton

Breadcrumb

PageBanner

EmptyState

Loading

---

# Data Rules

All products must come from

data/products.js

Do not hardcode product HTML.

Always use map().

Every product object should contain

id

slug

name

category

price

mrp

discount

description

features

image

gallery

offer

tags

featured

related

---

# Images

Use

next/image

Store placeholders inside

/public/products

Use meaningful filenames.

Example

tv-samsung.jpg

washing-machine.jpg

wooden-bed.jpg

steel-wardrobe.jpg

---

# Pages

/

Home

/products

Product Listing

/products/[slug]

Product Details

/offers

All Offers

/furniture

Furniture Offers

/about

About

/contact

Contact

404

Loading

---

# Home Sections

Hero

Offer Banner

Categories

Featured Products

Combo Offers

Brand Logos

Trust Badges

Testimonials

Locations

CTA

---

# Product Listing

Search

Category Filter

Sorting

Responsive Grid

Pagination (optional)

---

# Product Details

Gallery

Price

Offer

Features

Description

Related Products

WhatsApp Button

Call Button

---

# Contact

Contact Form

Google Maps

Call Buttons

WhatsApp

Business Hours

Branch Cards

---

# Floating Buttons

Bottom Right

Phone

WhatsApp

Phone

tel:9688463842

WhatsApp

https://wa.me/919688463842

---

# SEO

Every page must export metadata.

Use descriptive titles.

Use proper descriptions.

Generate OpenGraph metadata.

Generate Twitter metadata.

Use canonical URLs.

Generate sitemap.

Generate robots.txt.

---

# Performance

Use lazy loading.

Optimize images.

Use dynamic imports where appropriate.

Avoid unnecessary client components.

Prefer Server Components.

Only use "use client" when required.

---

# Accessibility

Use semantic HTML.

Use aria-label where necessary.

Keyboard accessible.

Proper color contrast.

Alt text for every image.

---

# Code Style

Small reusable components.

Meaningful naming.

No magic numbers.

Avoid deeply nested JSX.

Extract repeated UI.

Keep files under ~300 lines whenever possible.

---

# Tailwind Rules

Prefer utilities.

Avoid unnecessary custom CSS.

Keep spacing consistent.

Use container class.

Consistent typography.

Consistent colors.

---

# Animations

Use subtle animations only.

Hover

Fade

Slide

Scale

No excessive motion.

---

# Business Information

Business

Sri Kamatchi Electronics & Furnitures

GST

33CAFPM5346G1Z8

Phone

9688463842

9443634778

Branch 1

B. Mallapuram
Pappireddipatty Main Road
Bommidi
Dharmapuri
635301

Branch 2

Bypass Road
Opp N.N. Mahal
Harur
636903

---

# Brands

Godrej

Samsung

LG

Sony

Whirlpool

IFB

Bosch

Voltas

Haier

Panasonic

Prestige

Bajaj

Havells

Crompton

Oppo

Vivo

Realme

OnePlus

Xiaomi

Intex

Videocon

Usha

TCL

---

# Coding Principles

DRY

KISS

SOLID

Reusable Components

SEO First

Performance First

Accessibility First

Maintainability First

---

# Before Completing Any Task

Ensure

✅ No duplicated code

✅ Responsive

✅ Accessible

✅ SEO ready

✅ Images optimized

✅ Components reusable

✅ No inline CSS

✅ Uses next/image

✅ Uses data mapping

✅ Mobile friendly

✅ Production ready