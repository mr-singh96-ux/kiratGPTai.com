export default[
    {
        name:'Blog Title',
        desc:'An AI tool taht generate blog title depends upon your blopg information',
        category:'blog',
        icon:'https://cdn-icons-png.flaticon.com/128/4186/4186534.png',
        aiprompt:'Give me 5 blog topic idea in bullet wise only based on give title & outline and give me result in Rich text editor format.',
        slug:'generate-blog-title',
        form:[
            {
                label:'Enter your blog title',
                field:'input',
                name:'title',
                required:true
            },
            {
                label:'Enter blog outline',
                field:'textarea',
                name:'outline',

            }
        ]
    },
    {
    name: 'Blog Content',
    desc: 'An AI tool that generates full blog content based on your blog title, title, and outline.',
    category:'blog',
    icon: 'https://cdn-icons-png.flaticon.com/128/4905/4905454.png',
    aiprompt: 'Generate a detailed blog post based on the title, title, and outline provided.',
    slug: 'generate-blog-content',
    form: [
      {
        label: 'Enter your blog title',
        field: 'input',
        name: 'title',
        required: true
      },
      {
        label: 'Enter blog outline',
        field: 'textarea',
        name: 'outline',
      }
    ]
  },
  {
    name: 'Blog Topic Ideas',
    desc: 'An AI tool that generates multiple blog topic ideas based on the given title and outline.',
    category:'blog',
    icon: 'https://cdn-icons-png.flaticon.com/128/11497/11497847.png',
    aiprompt: 'Give me 5 blog topic ideas in bullet points based on the given title and outline.',
    slug: 'generate-blog-topic-ideas',
    form: [
      {
        label: 'Enter your blog title',
        field: 'input',
        name: 'title',
        required: true
      },
      {
        label: 'Enter blog outline',
        field: 'textarea',
        name: 'outline',
      }
    ]
  },
  {
    name: 'YouTube SEO Title',
    desc: 'An AI tool that generates SEO-friendly titles for YouTube videos based on the given description and topic.',
    category:'Youtube Tools',
    icon: 'https://cdn-icons-png.flaticon.com/128/402/402075.png',
    aiprompt: 'Generate an SEO-optimized YouTube title based on the given description and topic.',
    slug: 'generate-youtube-seo-title',
    form: [
      {
        label: 'Enter your YouTube video topic',
        field: 'input',
        name: 'topic',
        required: true
      },
      {
        label: 'Enter your YouTube video description',
        field: 'textarea',
        name: 'description',
      }
    ]
  },
  {
    name: 'YouTube Description',
    desc: 'An AI tool that generates YouTube video descriptions based on the given topic and keywords.',
    category:'Youtube Tool',
    icon: 'https://cdn-icons-png.flaticon.com/128/174/174883.png',
    aiprompt: 'Generate a detailed YouTube video description based on the given topic and keywords.',
    slug: 'generate-youtube-description',
    form: [
      {
        label: 'Enter your YouTube video topic',
        field: 'input',
        name: 'topic',
        required: true
      },
      {
        label: 'Enter your video keywords',
        field: 'textarea',
        name: 'keywords',
      }
    ]
  },
  {
    name: 'YouTube Tags',
    desc: 'An AI tool that generates relevant YouTube video tags based on the given video topic and keywords.',
    category:'Youtube Tool',
    icon: 'https://cdn-icons-png.flaticon.com/128/4674/4674918.png',
    aiprompt: 'Generate YouTube tags based on the given video topic and keywords.',
    slug: 'generate-youtube-tags',
    form: [
      {
        label: 'Enter your YouTube video topic',
        field: 'input',
        name: 'topic',
        required: true
      },
      {
        label: 'Enter your video keywords',
        field: 'textarea',
        name: 'keywords',
      }
    ]
  },
  {
    name: 'Article Rewriter',
    desc: 'An AI tool that rewrites articles to make them more unique and engaging.',
    category:'blog',
    icon: 'https://cdn-icons-png.flaticon.com/128/4228/4228952.png',
    aiprompt: 'Rewrite the given article to make it more unique, engaging, and original.',
    slug: 'rewrite-article',
    form: [
      {
        label: 'Enter the article text',
        field: 'textarea',
        name: 'articleText',
        required: true
      }
    ]
  },
  {
    name: 'Text Improver',
    desc: 'An AI tool that improves the quality of your text by enhancing its readability, tone, and style.',
    category:'blog',
    icon: 'https://cdn-icons-png.flaticon.com/128/4021/4021693.png',
    aiprompt: 'Improve the given text by enhancing readability, tone, and style.',
    slug: 'improve-text',
    form: [
      {
        label: 'Enter your text to improve',
        field: 'textarea',
        name: 'text',
        required: true
      }
    ]
  },
  {
    name: 'Add Emojis to Text',
    desc: 'An AI tool that adds relevant emojis to your text to make it more engaging.',
    category:'blog tool',
    icon: 'https://cdn-icons-png.flaticon.com/128/2584/2584606.png',
    aiprompt: 'Add emojis to the given text based on its content and context.',
    slug: 'add-emojis-to-text',
    form: [
      {
        label: 'Enter your text',
        field: 'textarea',
        name: 'text',
        required: true
      }
    ]
  },
  {
    name: 'Instagram Post Generator',
    desc: 'An AI tool that generates creative Instagram post captions based on the given topic.',
    category:'Instagram Tool',
    icon: 'https://cdn-icons-png.flaticon.com/128/2111/2111463.png',
    aiprompt: 'Generate a creative Instagram post caption based on the given topic.',
    slug: 'generate-instagram-post',
    form: [
      {
        label: 'Enter your Instagram post topic',
        field: 'input',
        name: 'topic',
        required: true
      }
    ]
  },
  {
    name: 'Instagram Hashtag Generator',
    desc: 'An AI tool that generates relevant hashtags for your Instagram post.',
    category:'Instagram Tool',
    icon: 'https://cdn-icons-png.flaticon.com/128/7045/7045432.png',
    aiprompt: 'Generate relevant hashtags for Instagram based on the given topic.',
    slug: 'generate-instagram-hashtags',
    form: [
      {
        label: 'Enter your Instagram post topic',
        field: 'input',
        name: 'topic',
        required: true
      }
    ]
  },
  {
    name: 'English Grammar Checker',
    desc: 'An AI tool that checks your English text for grammatical errors and suggests corrections.',
    category:'Blog Tool',
    icon: 'https://cdn-icons-png.flaticon.com/128/18475/18475391.png',
    aiprompt: 'Check the grammar of the given text and suggest corrections.',
    slug: 'check-english-grammar',
    form: [
      {
        label: 'Enter the text to check grammar',
        field: 'textarea',
        name: 'text',
        required: true
      }
    ]
  },
  {
    name: 'Code Generator & Explanation',
    desc: 'An AI tool that writes code based on your problem statement and explains how it works.',
    category:'Blog Tool',
    icon: 'https://cdn-icons-png.flaticon.com/128/6062/6062646.png',
    aiprompt: 'Write code to solve the given problem and explain each part of the code.',
    slug: 'generate-and-explain-code',
    form: [
      {
        label: 'Enter your coding problem or requirement',
        field: 'textarea',
        name: 'problem',
        required: true
      }
    ]
  }
]