import { defineConfig } from "sanity";
import { visionTool } from '@sanity/vision'
import { structureTool } from "sanity/structure";
import { itITLocale } from "@sanity/locale-it-it";

import { HomeIcon } from '@sanity/icons';
import { PinIcon } from "@sanity/icons";
import { SelectIcon } from "@sanity/icons";
import { BlockquoteIcon } from "@sanity/icons";
import { LinkIcon } from "@sanity/icons";
import { OverageIcon } from "@sanity/icons";

const property = {
  type: "document",
  name: "listings",
  title: "Listino",
  icon: HomeIcon,
  groups: [
    {name: "sell", title: "Vendita"},
    {name: "rent", title: "Affitto"},
    {name: "info", title: "Informazioni"}
  ],
  fields: [
    {
      name: 'gallery',
      title: "Galleria Immagini",
      description: "La prima immagine diventa la copertina, dimensioni immagine simili",
      type: 'array',
      of: [
        { type: 'image', options: { hotspot: true}}
      ],
      options: {
        layout: 'grid'
      }
    },
    {name: "title", title: "Titolo", type: "string"},
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {name: "description", title: "Descrizione", type: "string"},
    {name: "text", title: "Testo", type: 'blockContent'},
    {name: "excerpt", title: "Estratto", type: "text", description: "Breve riassunto sulla proprietà"},
    {
      name: "district",
      title: "Quartiere",
      type: "reference",
      to: {
        type: "locations",
      },
    },
    {
      name: "class",
      title: "Classe Energetica",
      type: 'string',
      group: "info",
      options: {
        list: [
          { title: 'Classe A', value: 'Classe Energetica A'},
          { title: 'Classe B', value: 'Classe Energetica B'},
          { title: 'Classe C', value: 'Classe Energetica C'},
          { title: 'Classe D', value: 'Classe Energetica D'},
          { title: 'Classe E', value: 'Classe Energetica E'},
          { title: 'Classe F', value: 'Classe Energetica F'},
          { title: 'Classe G', value: 'Classe Energetica G'},
          { title: 'In Corso', value: 'Classif. in corso'},
        ]
      }
    },
    {name: 'code', type: 'string', title: 'Codice Agenzia', group: 'info'},
    {
      name: "various",
      title: "Caratteristiche",
      type: "document",
      group: "info",
      fields: [
        {
          name: "rooms",
          title: "Stanze",
          type: "number",
        },
        {
          name: "garage",
          title: 'Posto Auto',
          type: 'boolean',
          initialValue: false,
        },
        {
          name: "available",
          title: 'Disponibilità',
          type: 'boolean',
          initialValue: false,
        },
        {
          name: "bath",
          title: "Bagni",
          type: "number",
        },
        {
          name: 'area',
          title: 'Metri Quadrati',
          type: "number",
        },
        {
          name: 'constructionYear',
          title: 'Anno di Costruzione',
          type: "number",
        },
        {
          name: 'floors',
          title: 'Numero di Piani',
          type: "number",
        },
        {
          name: 'locals',
          title: 'Locali Immobile',
          type: 'number',
        }
      ]
    },
    {
      name: 'luogo',
      group: "info",
      title: 'Luogo',
      type: 'document',
      fields: [
        {
          name: 'indirizzo',
          title: 'Indirizzo',
          type: 'string',
          description: 'ES: Via Giovanni Giolitti, Pesaro.',
        },
      ],
    },
    {name: "selling", title: "Vendita", type: "boolean", initialValue: false, group: "sell"},
    {
      title: "Prezzo di Vendita",
      name: "sellPrice",
      type: "string",
      group: "sell",
      hidden: ({ parent }: { parent: Record<string, any> }) => !parent?.selling,
    },
    {name: "renting", title: "Affitto", type: "boolean", initialValue: false, group: "rent"},
    {
      title: "Prezzo di Affitto",
      name: "rentPrice",
      type: "string",
      group: "rent",
      hidden: ({ parent }: { parent: Record<string, any> }) =>!parent?.renting,
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'code',
    },
    prepare(selection: any) {
      const {title, subtitle} = selection;
      return {
        title,
        subtitle: `Codice Agenzia: ${subtitle}`
      }
    }
  }
}

const zones = {
  name: 'zones',
  title: 'Zone',
  type: 'document',
  icon: PinIcon,
  fields: [
    {name: 'title', title: 'Titolo', type:'string'},
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: 'image',
      title: 'Immagine',
      type: 'image',
      options: {
        hotspot: true,
      }
    }
  ]
}

const locations = {
  name: 'locations',
  title: 'Quartieri',
  type: 'document',
  icon: PinIcon,
  fields: [
    {name: 'title', title: 'Titolo', type:'string'},
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "zone",
      title: "Zona",
      type: "reference",
      to: {
        type: "zones",
      },
    },
  ],
}

const classes = {
  name: "classes",
  title: "Classi Energetiche",
  type: "document",
  icon: SelectIcon,
  fields: [
    {
      name: "title",
      title: "Titolo",
      type: "string",
    }
  ]
}

const blockContent = {
  title: 'Testo Articolo',
  name: 'blockContent',
  type: 'array',
  of: [
    {
      title: 'Testo',
      type: 'block',
      styles: [
        { title: 'Testo', value: 'normal' },
        { title: 'H1', value: 'h1' },
        { title: 'H2', value: 'h2' },
        { title: 'H3', value: 'h3' },
      ],
      lists: [{ title: 'Lista', value: 'bullet' }],
      marks: {
        decorators: [
          { title: 'Grassetto', value: 'strong' },
          { title: 'Corsivo', value: 'em' },
        ],
        annotations: [
          {
            title: 'Link Interno',
            name: 'internalLink',
            type: 'object',
            icon: LinkIcon,
            fields: [
              {
                title: 'Reference',
                name: 'reference',
                type: 'reference',
                to: [{ type: 'listings' }],
              },
            ],
          },
          {
            name: 'link',
            type: 'object',
            title: 'Link Esterno',
            icon: OverageIcon,
            fields: [
              {
                name: 'href',
                type: 'url',
                validation: (Rule: any) =>
                  Rule.uri({
                    allowRelative: false,
                    scheme: ['http', 'https', 'mailto', 'tel'],
                  }),
              },
            ],
          },
          {
            name: 'quote',
            type: 'object',
            title: 'Citazione',
            icon: BlockquoteIcon,
            fields: [
              {
                name: 'text',
                type: 'text', // <= This can also be a Portable Text field
                title: '',
              },
              {
                name: 'url',
                type: 'url',
                title: 'URL',
                description: 'Riferimento web',
              },
            ],
          },
        ],
      },
    },
  ],
};

export default defineConfig({
  title: "Fine Living - Studio",

  projectId: import.meta.env.PUBLIC_SANITY_STUDIO_PROJECT_ID,
  dataset: import.meta.env.PUBLIC_SANITY_STUDIO_DATASET,

  plugins: [structureTool(), visionTool(), itITLocale()],
  schema: {
    types: [
      property,
      zones,
      locations,
      classes,
      blockContent
    ],
  },
});