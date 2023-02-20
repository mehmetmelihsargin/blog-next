import { createSlice } from '@reduxjs/toolkit'
import { uid } from 'uid';

const initialState = {
    data: [
        {
            id: uid(2),
            title: 'Learn React and Next js from blog posts',
            content: 'Next.js and React are popular and powerful tools in the front-end web development world. These two technologies are used to create modern and efficient web applications. Next.js is an open-source framework built using React. This framework is designed to create dynamic web pages and support server-side rendering (SSR). Next.js offers fast loading and SEO-friendly pages to enhance the user experience. It also includes features such as pre-rendering, customizable URLs, APIs, or serving static files. React, on the other hand, is a JavaScript library developed by Facebook. It is used to create dynamic and interactive web applications. React offers performance and efficiency during data exchange and allows for quick and easy implementation of changes in user interfaces. React enables code reuse and assists in the development of large and complex applications. While both technologies have similar features, Next.js complements React`s many weaknesses. Next.js makes using React even easier and speeds up the application development process. Next.js complements React with advanced server-side rendering support, API endpoints, and customizable URLs. In conclusion, Next.js and React are ideal for creating efficient and modern web applications. Although both technologies have their own unique advantages, they provide the best results when used together because they complement each others shortcomings.',
            herosContent:
                ' Nextjs and React are popular and powerful tools in the front-end \
                      web development world.These two technologies are used to create \
                      modern and efficient web applications.',
            textImage: 'https://cdn.devdojo.com/images/october2021/ghost-design.png',
        },
        {
            id: uid(2),
            title: 'Authentication In React With Supabase',
            content: 'User authentication is a crucial aspect of many web applications. It allows users to securely create accounts, log in, and access protected resources. Implementing user authentication can be complex and time-consuming, especially when developing an application from scratch. In this article, we will implement user authentication in React applications with the help of Supabase.\
            Supabase is an open- source alternative to Firebase that provides many features, such as authentication, database, storage, edge functions, and real - time APIs, which can be used to build real - time applications.Supabase eliminates the need for having a dedicated backend for the React applications.So, React developers can develop a FullStack web app just with React and Supabase. \
            In this article, you will learn how to implement User Authentication in a React Application using Supabase’s Email Auth feature.',
            herosContent:
                ' User authentication is a crucial aspect of many web applications. It allows users to securely create accounts, log in, and access protected resources. Implementing user authentication can be complex and time-consuming, especially when developing an application from scratch. In this article, we will implement user authentication in React applications with the help of Supabase.',
            textImage: 'https://blog.openreplay.com/images/authentication-in-react-with-supabase/images/hero.png',
        },
        {
            id: uid(2),
            title: 'Virtual DOM vs. Shadow DOM: What Every Developer Should Know',
            content: 'What is a DOM?\
            A solid understanding of the Document Object Model is necessary to understand the two variations of the DOM.\
            A Document Object Model represents a webpage structure in the form of a tree.It acts as an API to the web document, allowing programmatic interaction.This method enables programs to change the document style, structure, and content.\
            This representation allows scripting languages such as JavaScript to modify the object- oriented representation of the webpage.What is shadow DOM ?\
            A shadow DOM is a tool mainly used to create component - based websites and applications.It does not represent the entire Document Object Model.Instead, it acts as a subtree or a separate DOM for a specific element.\
                Therefore, its visual representation will indicate an additional tree for each shadow host.This process allows the shadow DOM to behave differently from a traditional DOM \
            Traditional DOM nodes are placed within other elements.However, in the case of a shadow DOM, the scoped tree is connected to the element but is separated from the child elements.In this instance, the scope tree is known as the shadow tree, and the element that the shadow tree connects to is the shadow host.\
            The main advantage of using shadow DOMs compared to traditional DOMs is that all the components added will be local to the specific shadow DOM.In addition, this approach resolves multiple issues that were present when using traditional DOMs:\
        Shadow DOMs isolate the DOM.Therefore, it does not show up in the global DOM.\
            A shadow DOM allows scoping of CSS, where styles are created within a shadow DOM element and stay within the scope of the shadow DOM.\
            A shadow DOM increases application performance, since DOM manipulation does not need to render the entire DOM but only the shadow DOM.This reduces the time required to render.\
            A typical implementation of the shadow DOM is within the Angular framework.It leverages the existing shadow DOM API on the web browser to provide element isolation.This enables developers to extend the current capabilities of the Angular framework rather than having to interact with the browser’s shadow DOM APIs manually.',
            herosContent:
                'Many technologies and methodologies have made front-end development evolve over its lifetime. One of the approaches introduced was the DOM, or Document Object Model, which acts as an API for HTML or XML documents. Furthermore, there have been multiple innovations within the realm of the DOM, such as the virtual and shadow DOMs. Even though there are significant differences between these two DOMs, developers often use these terms interchangeably, which can be confusing within the context of the discussion.',
            textImage: 'https://www.syncfusion.com/blogs/wp-content/uploads/2023/02/Virtual-DOM-vs.-Shadow-DOM-What-Every-Developer-Should-Know-1.png',
        },
    ]
}

export const posts = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        data: () => {
            return initialState;
        },

    },

})


export default posts.reducer