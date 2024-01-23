// Root.jsx
import React from 'react';
import App from './App';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import NotFound from './pages/NotFound';
import NavigationBar from "./NavigationBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function Root() {

    const routes= [
        { path: "/", element: <App />, exact: true },
        { path: "/about", element: <About />, exact: true },
        { path: "/contact", element: <Contact />, exact: true },
        { path: "/blog", element: <Blog />, exact: true },
        { path: "/blog/:id", element: <BlogPost />, exact: true },
        { path: "*", element: <NotFound />, exact: true },
    ];

    return (
        <Router>
            <div className="todo-app-container">
                <NavigationBar />
                <div className="content">
                    <Routes>
                        {routes.map((route, index) => (
                            <Route
                                key={index}
                                path={route.path}
                                element={route.element}
                                exact={route.exact}
                            />
                        ))}

                        {/*<Route path="/" element={<App />} />*/}
                        {/*<Route path="/about" element={<About />} />*/}
                        {/*<Route path="/contact" element={<Contact />} />*/}
                        {/*<Route path="/blog" exact element={<Blog />} />*/}
                        {/*<Route path="/blog/:id" element={<BlogPost />} />*/}
                        {/*/!*404*!/*/}
                        {/*<Route path="*" element={<NotFound />} />*/}
                    </Routes>
                </div>
            </div>
        </Router>
    );
}
