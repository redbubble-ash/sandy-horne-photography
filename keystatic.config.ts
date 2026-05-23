import { config, fields, collection, singleton } from "@keystatic/core";

export default config({
  storage: process.env.NEXT_PUBLIC_KEYSTATIC_GITHUB_APP_SLUG
    ? {
        kind: "github",
        repo: {
          owner: "redbubble-ash",
          name: "sandy-horne-photography",
        },
      }
    : { kind: "local" },

  ui: {
    brand: { name: "Sandy Horne Photography" },
  },

  singletons: {
    settings: singleton({
      label: "Site Settings",
      path: "content/settings",
      schema: {
        email: fields.text({
          label: "Email Address",
          defaultValue: "hello@sandyhornephoto.com",
        }),
        instagram: fields.text({
          label: "Instagram Handle (without @)",
          defaultValue: "sandyhornephoto",
        }),
        facebook: fields.text({
          label: "Facebook Page URL",
          defaultValue: "https://facebook.com/sandyhornephoto",
        }),
        location: fields.text({
          label: "Location",
          defaultValue: "Australia",
        }),
      },
    }),

    home: singleton({
      label: "Home Page",
      path: "content/home",
      schema: {
        heroTagline: fields.text({
          label: "Hero Tagline",
          multiline: true,
          defaultValue:
            "Capturing Australia's wild birds and hidden landscapes through patience, light, and reverence for the natural world.",
        }),
        quote: fields.text({
          label: "Quote",
          multiline: true,
          defaultValue: "The forest is my cathedral, the birds my choir.",
        }),
        quoteAttribution: fields.text({
          label: "Quote Attribution",
          defaultValue: "Sandy Horne",
        }),
      },
    }),

    about: singleton({
      label: "About Page",
      path: "content/about",
      schema: {
        heading: fields.text({
          label: "Page Heading",
          defaultValue:
            "Finding stillness in the wild places of Australia",
        }),
        bio1: fields.text({
          label: "Bio Paragraph 1",
          multiline: true,
          defaultValue:
            "I'm Sandy Horne — a nature photographer based in Australia, with a deep love for birds and the landscapes they call home. For over 15 years I've been venturing into the bush before dawn, waiting in mangroves, and lying in tall grass with nothing but patience and a long lens.",
        }),
        bio2: fields.text({
          label: "Bio Paragraph 2",
          multiline: true,
          defaultValue:
            "My work is shaped by a quiet philosophy: the best wildlife images come from understanding behaviour, not from chasing shots. Whether it's a kingfisher hovering over a creek or a wedge-tailed eagle riding a thermal at sunrise, I believe every frame should feel earned.",
        }),
        bio3: fields.text({
          label: "Bio Paragraph 3",
          multiline: true,
          defaultValue:
            "I shoot across Australia — from the tropical wetlands of Kakadu and the rainforests of the Daintree, to the alpine country of Victoria and the coastal heaths of the south-east. Each ecosystem holds its own light, its own rhythms, and its own cast of extraordinary birds.",
        }),
        bio4: fields.text({
          label: "Bio Paragraph 4",
          multiline: true,
          defaultValue:
            "My images have been exhibited nationally and published in Australian wildlife and conservation publications. When I'm not in the field, I offer photography workshops for anyone who wants to slow down and truly see what's out there.",
        }),
        stats: fields.array(
          fields.object({
            value: fields.text({ label: "Value (e.g. 15+)" }),
            label: fields.text({ label: "Label (e.g. Years behind the lens)" }),
          }),
          {
            label: "Stats",
            itemLabel: (props) => props.fields.label.value || "Stat",
          }
        ),
      },
    }),
  },

  collections: {
    gallery: collection({
      label: "Gallery",
      path: "content/gallery/*",
      slugField: "title",
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        category: fields.select({
          label: "Category",
          options: [
            { label: "Birds", value: "birds" },
            { label: "People", value: "people" },
            { label: "Animals", value: "animals" },
            { label: "Landscapes", value: "landscapes" },
            { label: "Flora", value: "flora" },
            { label: "Monochrome", value: "monochrome" },
          ],
          defaultValue: "birds",
        }),
        image: fields.image({
          label: "Photo",
          directory: "public/images/gallery",
          publicPath: "/images/gallery",
        }),
        alt: fields.text({ label: "Alt Text / Description" }),
        featured: fields.checkbox({
          label: "Feature on Home Page",
          defaultValue: false,
        }),
        order: fields.integer({
          label: "Display Order",
          defaultValue: 0,
        }),
      },
    }),
  },
});
