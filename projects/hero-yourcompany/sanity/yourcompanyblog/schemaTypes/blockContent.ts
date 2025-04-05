// blockContent.ts
export default {
  name: 'blockContent',
  title: 'Block Content',
  type: 'array',
  of: [
    {
      type: 'block',
      // Styles allow you to define how the block appears. "Normal" is your paragraph.
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'Heading 1', value: 'h1' },
        { title: 'Heading 2', value: 'h2' },
        { title: 'Heading 3', value: 'h3' },
        { title: 'Heading 4', value: 'h4' },
        { title: 'Quote', value: 'blockquote' },
      ],
      // Lists (if you want bullet or numbered lists)
      lists: [{ title: 'Bullet', value: 'bullet' }],
      marks: {
        // Decorators are inline styles for text (bold, italic, underline, etc.)
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
          { title: 'Underline', value: 'underline' },
          { title: 'Highlight', value: 'highlight' }, // Custom decorator for highlighting
        ],
        // Annotations allow you to add extra data (like links)
        annotations: [
          {
            name: 'link',
            title: 'External Link',
            type: 'object',
            fields: [
              {
                name: 'href',
                title: 'URL',
                type: 'url',
              },
              {
                name: 'blank',
                title: 'Open in new window',
                type: 'boolean',
                description: 'If true, the link will open in a new window',
              },
            ],
          },
        ],
      },
    },
    // You can add additional block types (like images) here if needed.
  ],
};