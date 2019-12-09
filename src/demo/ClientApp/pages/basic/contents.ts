/*
 * This file is part of ORY Editor.
 *
 * ORY Editor is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * ORY Editor is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with ORY Editor.  If not, see <http://www.gnu.org/licenses/>.
 *
 * @license LGPL-3.0
 * @copyright 2016-2018 Aeneas Rekkas
 * @author Aeneas Rekkas <aeneas+oss@aeneas.io>
 *
 */
// tslint:disable:max-line-length
import { EditableType } from '@react-page/core/lib/types/editable';

const contents: EditableType = {
  id: '1',
  cells: [
    {
      id: '5ac89ec4-7536-4120-a072-8eedad0a48ff',
      inline: null,
      size: 12,
      rows: [
        {
          id: 'd813d094-215a-43ec-bcdd-d5fd6258b915',
          cells: [
            {
              id: '3fde7b92-fbfe-4b2d-85b3-bad431939df6',
              inline: null,
              size: 12,
              content: {
                plugin: {
                  name: 'ory/editor/core/content/slate',
                  version: '0.0.2',
                },
                state: {
                  value: {
                    version: '0.0.1',
                    data: [
                      {
                        type: 'HEADING',
                        children: [
                          {
                            text: 'The ORY Editor',
                            marks: [],
                          },
                        ],
                        level: 1,
                        alignment: 'center',
                      },
                      {
                        type: 'PARAGRAPH',
                        children: [
                          {
                            text: '',
                            marks: [],
                          },
                          {
                            type: 'LINK',
                            url: 'https://www.ory.sh/',
                            children: [
                              {
                                text: 'ORY',
                                marks: [],
                              },
                            ],
                          },
                          {
                            text:
                              ' is a company building and maintaining developer tools for a safer, more accessible web. You might also like our other ',
                            marks: [],
                          },
                          {
                            type: 'LINK',
                            url: 'https://github.com/ory',
                            children: [
                              {
                                text: 'Open Source',
                                marks: [],
                              },
                            ],
                          },
                          {
                            text:
                              ' tools! The ORY Editor is a smart, extensible and modern editor ("WYSIWYG") for the web written in React.',
                            marks: [],
                          },
                        ],
                      },
                      {
                        type: 'PARAGRAPH',
                        children: [
                          {
                            text:
                              'The ORY Editor was written because we urgently needed a robust and modern content editing solution for our open education platform ',
                            marks: [],
                          },
                          {
                            type: 'LINK',
                            url: 'https://en.serlo.org/serlo',
                            children: [
                              {
                                text: 'serlo.org',
                                marks: [],
                              },
                            ],
                          },
                          {
                            text:
                              '. Serlo is the largest open education platform in Germany, works like the Wikipedia and is used by millions every year.',
                            marks: [],
                          },
                        ],
                      },
                    ],
                  },
                },
              },
            },
          ],
        },
        {
          id: 'c15959de-4767-41b7-9814-71626d6cbcdb',
          cells: [
            {
              id: '33c58cda-94b5-4c2e-9232-9aa27a4aff8d',
              inline: null,
              size: 6,
              content: {
                plugin: {
                  name: 'ory/editor/core/content/slate',
                  version: '0.0.2',
                },
                state: {
                  value: {
                    version: '0.0.1',
                    data: [
                      {
                        type: 'HEADING',
                        children: [
                          {
                            text: 'ORY Sites',
                            marks: [],
                          },
                        ],
                        level: 2,
                      },
                      {
                        type: 'PARAGRAPH',
                        children: [
                          {
                            text: 'ORY Sites is an ',
                            marks: [],
                          },
                          {
                            text: 'next-gen',
                            marks: [
                              {
                                type: 'bold',
                              },
                            ],
                          },
                          {
                            text: ' ',
                            marks: [],
                          },
                          {
                            text: 'open source static site generator',
                            marks: [
                              {
                                type: 'bold',
                              },
                            ],
                          },
                          {
                            text:
                              ' based on the ORY Editor. Create stunning websites, write your own designs and plugins, and be done with databases, application servers, and security updates.',
                            marks: [],
                          },
                        ],
                      },
                      {
                        type: 'PARAGRAPH',
                        level: 3,
                        children: [
                          {
                            text: '',
                            marks: [],
                          },
                          {
                            type: 'LINK',
                            url:
                              'https://www.ory.sh/sites?utm_source=github&utm_medium=link&utm_campaign=editor_demo',
                            children: [
                              {
                                text: 'Learn more about ORY Sites!',
                                marks: [],
                              },
                            ],
                          },
                          {
                            text: '',
                            marks: [],
                          },
                        ],
                        alignment: 'center',
                      },
                      {
                        type: 'PARAGRAPH',
                        children: [
                          {
                            text: '\n',
                            marks: [],
                          },
                        ],
                      },
                    ],
                  },
                },
              },
            },
            {
              id: 'd5e4efbe-66f0-4344-9df0-f0720b5d1f5d',
              inline: null,
              size: 6,
              content: {
                plugin: {
                  name: 'ory/sites/plugin/content/html5-video',
                  version: '0.0.1',
                },
                state: {
                  url: 'http://techslides.com/demos/sample-videos/small.mp4',
                },
              },
            },
          ],
        },
        {
          id: '5f33bca6-4ab3-4429-a38f-4d02fb5a16e6',
          cells: [
            {
              id: '640485f1-04d4-4579-81e0-5d8aa1dbfe24',
              inline: null,
              size: 12,
              content: {
                plugin: {
                  name: 'ory/editor/core/content/slate',
                  version: '0.0.2',
                },
                state: {
                  value: {
                    version: '0.0.1',
                    data: [
                      {
                        type: 'HEADING',
                        children: [
                          {
                            text: "What's the problem?\n",
                            marks: [],
                          },
                        ],
                        level: 2,
                        alignment: 'center',
                      },
                    ],
                  },
                },
              },
            },
          ],
        },
        {
          id: '09c5e133-ef5c-40ce-965f-a14200e4f162',
          cells: [
            {
              id: '5e813953-98b7-41aa-b077-42923cc0d2c6',
              inline: 'right',
              size: 5,
              content: {
                plugin: {
                  name: 'ory/editor/core/content/image',
                  version: '0.0.1',
                },
                state: {
                  src: 'http://lorempixel.com/640/360',
                },
              },
            },
            {
              id: '2fff5d50-f252-478b-b354-181300e21419',
              inline: null,
              size: 12,
              content: {
                plugin: {
                  name: 'ory/editor/core/content/slate',
                  version: '0.0.2',
                },
                state: {
                  value: {
                    version: '0.0.1',
                    data: [
                      {
                        type: 'PARAGRAPH',
                        children: [
                          {
                            text:
                              'We had to realize that existing open source content editing solutions had one of the three flaws:\n',
                            marks: [],
                          },
                        ],
                      },
                      {
                        type: 'bulleted-list',
                        children: [
                          {
                            type: 'list-item',
                            children: [
                              {
                                type: 'PARAGRAPH',
                                children: [
                                  {
                                    text:
                                      'The produced markup was horrific, a lot of sanitation had to take place and XSS is always a threat.\n',
                                    marks: [],
                                  },
                                ],
                              },
                            ],
                          },
                          {
                            type: 'list-item',
                            children: [
                              {
                                type: 'PARAGRAPH',
                                children: [
                                  {
                                    text:
                                      'The author must learn special mark up, like markdown, before being able to produce content. These text-based solutions are usually unable to specify a layout and complex data structures like tables are annoying to edit.\n',
                                    marks: [],
                                  },
                                ],
                              },
                            ],
                          },
                          {
                            type: 'list-item',
                            children: [
                              {
                                type: 'PARAGRAPH',
                                children: [
                                  {
                                    text:
                                      'Promising libraries potentially solving the above where abandoned by their maintainers, because it started as a special use case, or a free-time project.\n',
                                    marks: [],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                },
              },
            },
          ],
        },
        {
          id: 'da7ba725-44a0-4be5-9e5d-53db76950b15',
          cells: [
            {
              id: 'ede254d9-f54f-47c1-85c3-e0e09e816264',
              inline: null,
              size: 12,
              content: {
                plugin: {
                  name: 'ory/editor/core/content/slate',
                  version: '0.0.2',
                },
                state: {
                  value: {
                    version: '0.0.1',
                    data: [
                      {
                        type: 'HEADING',
                        children: [
                          {
                            text: "So what's different?\n",
                            marks: [],
                          },
                        ],
                        level: 2,
                        alignment: 'center',
                      },
                    ],
                  },
                },
              },
            },
          ],
        },
        {
          id: 'de26482c-ba8a-42b3-bdfc-b4f0761e2dad',
          cells: [
            {
              id: 'b2332df1-94c4-4136-867f-14c93e1efe48',
              inline: null,
              size: 4,
              content: {
                plugin: {
                  name: 'ory/editor/core/content/video',
                  version: '0.0.1',
                },
                state: {
                  src: 'https://www.youtube.com/watch?v=dkc65_l0Kfc',
                },
              },
            },
            {
              id: '71d9437b-38ef-40f9-be8b-0a5517734922',
              inline: null,
              size: 8,
              content: {
                plugin: {
                  name: 'ory/editor/core/content/slate',
                  version: '0.0.2',
                },
                state: {
                  value: {
                    version: '0.0.1',
                    data: [
                      {
                        type: 'PARAGRAPH',
                        children: [
                          {
                            text:
                              'We concluded that a solution must meet the following principles:\n',
                            marks: [],
                          },
                        ],
                      },
                      {
                        type: 'bulleted-list',
                        children: [
                          {
                            type: 'list-item',
                            children: [
                              {
                                type: 'PARAGRAPH',
                                children: [
                                  {
                                    text:
                                      'The state is a normalized JSON object, no HTML involved.\n',
                                    marks: [],
                                  },
                                ],
                              },
                            ],
                          },
                          {
                            type: 'list-item',
                            children: [
                              {
                                type: 'PARAGRAPH',
                                children: [
                                  {
                                    text:
                                      'It is a visual editor that does not require programming experience or special training.\n',
                                    marks: [],
                                  },
                                ],
                              },
                            ],
                          },
                          {
                            type: 'list-item',
                            children: [
                              {
                                type: 'PARAGRAPH',
                                children: [
                                  {
                                    text:
                                      'It is built by a company, reducing the likelihood of abandonment.\n',
                                    marks: [],
                                  },
                                ],
                              },
                            ],
                          },
                          {
                            type: 'list-item',
                            children: [
                              {
                                type: 'PARAGRAPH',
                                children: [
                                  {
                                    text:
                                      'Based on reusable React Components, it gives developers, authors and designers new ways of working together and creating better and richer experiences more easily.\n',
                                    marks: [],
                                  },
                                ],
                              },
                            ],
                          },
                          {
                            type: 'list-item',
                            children: [
                              {
                                type: 'PARAGRAPH',
                                children: [
                                  {
                                    text:
                                      'It works on mobile and touch devices.\n',
                                    marks: [],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                      {
                        type: 'PARAGRAPH',
                        children: [
                          {
                            text:
                              'With these principles in mind, we went out and implemented the ORY Editor, which you are looking at right now.',
                            marks: [],
                          },
                        ],
                      },
                    ],
                  },
                },
              },
            },
          ],
        },
        {
          id: 'b3c394b2-f99c-4286-a348-0dc5c4592f05',
          cells: [
            {
              id: 'af4d6d7b-57ac-43f2-aff6-6b141dfcf98e',
              inline: null,
              size: 12,
              content: {
                plugin: {
                  name: 'ory/editor/core/content/spacer',
                  version: '0.0.1',
                },
                state: {
                  height: 48,
                },
              },
            },
          ],
        },
        {
          id: '338463af-5dfb-4e53-a53d-a47855247269',
          cells: [
            {
              id: 'f9a5c347-8e5f-464f-8af9-b130ec2dd3bb',
              inline: null,
              size: 12,
              content: {
                plugin: {
                  name: 'ory/editor/core/content/slate',
                  version: '0.0.2',
                },
                state: {
                  value: {
                    version: '0.0.1',
                    data: [
                      {
                        type: 'HEADING',
                        children: [
                          {
                            text: 'Feature Spotlight\n',
                            marks: [],
                          },
                        ],
                        level: 2,
                        alignment: 'center',
                      },
                    ],
                  },
                },
              },
            },
          ],
        },
        {
          id: '111f3e10-e62f-483c-8937-9b95ca05c48d',
          cells: [
            {
              id: '9e726399-4a2c-4ea7-b0f3-7742d430a861',
              inline: null,
              size: 12,
              content: {
                plugin: {
                  name: 'ory/editor/core/content/divider',
                  version: '0.0.1',
                },
                state: {},
              },
            },
          ],
        },
        {
          id: '76814458-ee0c-49c4-b011-937ce7e883fc',
          cells: [
            {
              id: '4825fda3-916f-44f9-ac02-3be553bcd871',
              inline: null,
              size: 8,
              content: {
                plugin: {
                  name: 'ory/editor/core/content/slate',
                  version: '0.0.2',
                },
                state: {
                  value: {
                    version: '0.0.1',
                    data: [
                      {
                        type: 'HEADING',
                        level: 3,
                        children: [
                          {
                            text: 'Rich Inline Editing',
                            marks: [],
                          },
                        ],
                      },
                      {
                        type: 'PARAGRAPH',
                        children: [
                          {
                            text:
                              'Presentation and modification happen in the same canvas, at the same time. Now you always know what your content looks like on desktop, tablet and mobile, in real-time!',
                            marks: [],
                          },
                        ],
                      },
                    ],
                  },
                },
              },
            },
            {
              id: '76d7587b-d978-4958-b54f-91ccb1e3d0a2',
              inline: null,
              size: 4,
              content: {
                plugin: {
                  name: 'ory/editor/core/content/image',
                  version: '0.0.1',
                },
                state: {
                  src: 'http://lorempixel.com/640/360',
                },
              },
            },
          ],
        },
        {
          id: '2e1d1ba8-cdbe-4175-9990-26cdc15fce5c',
          cells: [
            {
              id: '412e3261-1fb8-474f-965e-39cbc5a16d18',
              inline: null,
              size: 4,
              content: {
                plugin: {
                  name: 'ory/editor/core/content/image',
                  version: '0.0.1',
                },
                state: {
                  src: 'http://lorempixel.com/640/360',
                },
              },
            },
            {
              id: '02125c61-3120-49ef-9b50-70ae79409bea',
              inline: null,
              size: 8,
              content: {
                plugin: {
                  name: 'ory/editor/core/content/slate',
                  version: '0.0.2',
                },
                state: {
                  value: {
                    version: '0.0.1',
                    data: [
                      {
                        type: 'HEADING',
                        level: 3,
                        children: [
                          {
                            text: 'Responsive Layouts',
                            marks: [],
                          },
                        ],
                      },
                      {
                        type: 'PARAGRAPH',
                        children: [
                          {
                            text:
                              "Today's content is more than a monolithic blob of text. The ORY Editor allows you to define your own layout blocks, and create content that looks good on all devices.",
                            marks: [],
                          },
                        ],
                      },
                    ],
                  },
                },
              },
            },
          ],
        },
        {
          id: 'ec4474f6-a418-4628-831b-03a7e64fd500',
          cells: [
            {
              id: '78269a8f-7b29-4703-b107-b399eac3e365',
              inline: null,
              size: 8,
              content: {
                plugin: {
                  name: 'ory/editor/core/content/slate',
                  version: '0.0.2',
                },
                state: {
                  value: {
                    version: '0.0.1',
                    data: [
                      {
                        type: 'HEADING',
                        level: 3,
                        children: [
                          {
                            text: 'Sane mark-up',
                            marks: [],
                          },
                        ],
                      },
                      {
                        type: 'PARAGRAPH',
                        children: [
                          {
                            text:
                              "Most web editors work on top of the DOM. This is dangerous (XSS), hard to maintain and difficult to parse. The ORY Editor uses JSON only - everywhere! It's sane, tested, clean and minimal.",
                            marks: [],
                          },
                        ],
                      },
                    ],
                  },
                },
              },
            },
            {
              id: 'e8c5696c-4769-483c-a962-2fd5f4727c0c',
              inline: null,
              size: 4,
              content: {
                plugin: {
                  name: 'ory/editor/core/content/image',
                  version: '0.0.1',
                },
                state: {
                  src: 'http://lorempixel.com/640/360',
                },
              },
            },
          ],
        },
        {
          id: 'dad71b07-5d3e-4aaf-9c8a-0e06a346de99',
          cells: [
            {
              id: '6c11a0d6-6857-4917-9692-eae056fd9500',
              inline: null,
              size: 12,
              layout: {
                plugin: {
                  name: 'ory/editor/core/layout/background',
                  version: '0.0.1',
                },
                state: {
                  bgSrc: 'http://lorempixel.com/640/360',
                },
              },
              rows: [
                {
                  id: 'c9d1ff2a-f7d1-410c-b275-9dd6200114c5',
                  cells: [
                    {
                      id: 'fa87ac49-73b9-4202-9034-f752fa83273c',
                      inline: null,
                      size: 4,
                      content: {
                        plugin: {
                          name: 'ory/editor/core/content/image',
                          version: '0.0.1',
                        },
                        state: {
                          src: 'http://lorempixel.com/640/360',
                        },
                      },
                    },
                    {
                      id: '491d3370-e551-4b05-be4f-c926d52ee08b',
                      inline: null,
                      size: 8,
                      content: {
                        plugin: {
                          name: 'ory/editor/core/content/slate',
                          version: '0.0.2',
                        },
                        state: {
                          value: {
                            version: '0.0.1',
                            data: [
                              {
                                type: 'HEADING',
                                children: [
                                  {
                                    text: 'React Plugin API',
                                    marks: [],
                                  },
                                ],
                                level: 2,
                              },
                              {
                                type: 'PARAGRAPH',
                                children: [
                                  {
                                    text:
                                      "You don't like our rich text solution, require custom layout components, need a twitter feed, want to contribute or even sell plugins? No problem with our easy-to-use React Plugin API!",
                                    marks: [],
                                  },
                                ],
                              },
                              {
                                type: 'PARAGRAPH',
                                children: [
                                  {
                                    text:
                                      'In fact, this section is rendered on top of an exemplary layout plugin!',
                                    marks: [],
                                  },
                                ],
                              },
                            ],
                          },
                        },
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: '5db554dd-6b14-46c6-8dd4-3de3aee946a9',
          cells: [
            {
              id: '246945c0-f677-4942-b067-ecfef5624911',
              inline: null,
              size: 12,
              content: {
                plugin: {
                  name: 'ory/editor/core/content/slate',
                  version: '0.0.2',
                },
                state: {
                  value: {
                    version: '0.0.1',
                    data: [
                      {
                        type: 'HEADING',
                        children: [
                          {
                            text: "That's all?\n",
                            marks: [],
                          },
                        ],
                        level: 2,
                        alignment: 'center',
                      },
                    ],
                  },
                },
              },
            },
          ],
        },
        {
          id: 'ba89fcb0-6657-4826-abc0-1ad006dac05c',
          cells: [
            {
              id: 'b368328c-86fd-4949-b0c8-7277da6c7d6d',
              inline: null,
              size: 12,
              content: {
                plugin: {
                  name: 'ory/editor/core/content/slate',
                  version: '0.0.2',
                },
                state: {
                  value: {
                    version: '0.0.1',
                    data: [
                      {
                        type: 'PARAGRAPH',
                        children: [
                          {
                            text:
                              'No, of course not! We are very proud of these ones as well:',
                            marks: [],
                          },
                        ],
                        level: 3,
                      },
                      {
                        type: 'bulleted-list',
                        children: [
                          {
                            type: 'list-item',
                            children: [
                              {
                                type: 'PARAGRAPH',
                                children: [
                                  {
                                    text: 'global un-/redo with ',
                                    marks: [],
                                  },
                                  {
                                    text: 'ctrl+z',
                                    marks: [
                                      {
                                        type: 'italic',
                                      },
                                    ],
                                  },
                                  {
                                    text: ' / ',
                                    marks: [],
                                  },
                                  {
                                    text: 'ctrl+y',
                                    marks: [
                                      {
                                        type: 'italic',
                                      },
                                    ],
                                  },
                                ],
                              },
                            ],
                          },
                          {
                            type: 'list-item',
                            children: [
                              {
                                type: 'PARAGRAPH',
                                children: [
                                  {
                                    text: 'editing shortcuts, for example ',
                                    marks: [],
                                  },
                                  {
                                    text: 'ctrl+b',
                                    marks: [
                                      {
                                        type: 'bold',
                                      },
                                    ],
                                  },
                                  {
                                    text: ',',
                                    marks: [],
                                  },
                                  {
                                    text: ' ',
                                    marks: [
                                      {
                                        type: 'bold',
                                      },
                                    ],
                                  },
                                  {
                                    text: 'ctrl+i, ',
                                    marks: [
                                      {
                                        type: 'italic',
                                      },
                                    ],
                                  },
                                  {
                                    text: 'ctrl+u',
                                    marks: [
                                      {
                                        type: 'underline',
                                      },
                                    ],
                                  },
                                ],
                              },
                            ],
                          },
                          {
                            type: 'list-item',
                            children: [
                              {
                                type: 'PARAGRAPH',
                                children: [
                                  {
                                    text: 'collaborative editing',
                                    marks: [],
                                  },
                                ],
                              },
                            ],
                          },
                          {
                            type: 'list-item',
                            children: [
                              {
                                type: 'PARAGRAPH',
                                children: [
                                  {
                                    text: '... and more things to come',
                                    marks: [],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                },
              },
            },
          ],
        },
      ],
    },
  ],
};
export default contents;
