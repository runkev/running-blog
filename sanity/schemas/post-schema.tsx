
const post = {
    name: 'post',
    title: 'Blog Post',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule: any) => Rule.required().max(80).error('A title is required'),
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: (Rule: any) => Rule.required().error('A slug is required'),
        },
        {
            name: 'author',
            title: 'Author',
            type: 'string',
        },
        {
            name: 'publishedAt',
            title: 'Published at',
            type: 'datetime',
            validation: (Rule: any) => Rule.required().error('A publish date is required'),
        },
        // {
        //     name: 'mainImage',
        //     title: 'Main image',
        //     type: 'image',
        //     options: {
        //         hotspot: true,
        //     },
        // },
        // {
        //     name: 'excerpt',
        //     title: 'Excerpt',
        //     type: 'text',
        //     validation: (Rule: any) => Rule.max(200).warning('Shorter excerpts are often better'),
        // },
        {
            name: 'body',
            title: 'Body',
            type: 'array',
            of: [
                {
                    type: 'block',
                    styles: [{ title: 'Normal', value: 'normal' }],
                    lists: [{ title: 'Bullet', value: 'bullet' }],
                    marks: {
                        decorators: [
                            { title: 'Strong', value: 'strong' },
                            { title: 'Emphasis', value: 'em' },
                        ],
                        annotations: [
                            {
                                name: 'link',
                                type: 'object',
                                fields: [
                                    {
                                        name: 'href',
                                        type: 'url',
                                        title: 'URL',
                                    },
                                    {
                                        title: 'Open in new tab',
                                        name: 'blank',
                                        type: 'boolean',
                                    },
                                ],
                            },
                        ],
                    },
                },
            ],
        },
    ],
    // preview: {
    //     select: {
    //         title: 'title',
    //         author: 'author.name',
    //         media: 'mainImage',
    //     },
    //     prepare(selection: any) {
    //         const { author } = selection;
    //         return {
    //             title: selection.title,
    //             subtitle: author && `by ${author}`,
    //             media: selection.media,
    //         };
    //     },
    // },
};

export default post;
  