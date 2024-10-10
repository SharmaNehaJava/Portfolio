import React, { useState, useEffect } from "react";

// Blog Component
const Blog = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [likedBlogs, setLikedBlogs] = useState(() => {
    // Get liked blogs from localStorage
    const storedLikes = JSON.parse(localStorage.getItem("likedBlogs")) || [];
    return storedLikes;
  });

  const blogs = [
    {
      date: "Dec 22, 2023",
      title: "Why I Chose Software Engineering: Following a Childhood Dream",
      content: `From a very young age, I had a clear vision of what I wanted to be. A memory etched in my mind is of a priest who, while I was only three or four years old, told me that I would become an engineer! 👷‍♀️ That moment left an indelible mark, and somehow, I held onto it. Growing up in a family where many of my cousins were engineers, I naturally gravitated towards the same field. 

As I moved into my teenage years, engineering was always in the back of my mind. Science was my comfort zone—something I felt I could excel in even if I stumbled along the way! 🔬 I knew that even if I failed, I would fail with a smile, enjoying the process of learning. 😊

But it wasn’t always smooth sailing. My marks in class 11 weren’t great, and I found myself torn between two passions—science and creativity. From a young age, I was also heavily invested in creative fields like sketching and painting 🎨, something that gave me a different kind of satisfaction. This interest led me to briefly consider a career in fashion design. The world of colors, patterns, and designs felt like home amidst the taxing academic rigors of physics and chemistry.

The COVID-19 pandemic, however, brought a shift in focus. After the lockdown, I doubled down on studying hard, falling in love with physics and finally understanding why so many people dreaded chemistry! I passed my exams and found myself at a crossroads—prepare for engineering entrance exams like JEE, or follow my newfound love for fashion and creativity as a carrier.

Ultimately, I chose my one, and here I am, a final-year BTech student. 🎓 While it wasn’t a direct or obvious journey, it feels right. This journey has shaped me into who I am today, a software engineer driven by a mix of logic and creativity! 💻✨`,
      id: 1,
      image: 'https://tse1.mm.bing.net/th?id=OIP.2FreyTseefFABXi3RXzmygHaEK&pid=Api&P=0&w=300&h=300',
    },
    {
      date: "Dec 23, 2023",
      title: "My Journey into Technology and Coding",
      content:  `It wasn’t until my first year of engineering that I truly began to explore the world of technology. Everything seemed good—new subjects, new friends, and a new phase in life! 😊 But things took a tough turn in the third semester. My CGPA dropped to 7.7, and to make matters worse, I got attandance shortage in one of my subjects, and was expelled to give exam for the same. 😔

      I had always been the “first-bencher,” the one with good grades and a place at the front of the class. So, when I found myself struggling academically, it hit me hard! As I was away from home, I also had to navigate the emotional challenges of dealing with new people and living on my own.
      
      Determined to regain control of my academic and personal life, I stopped sitting at the back and moved back to the front rows. The isolation helped me focus better, and despite the personal challenges, I worked on improving myself! 💪 It was during this time that I discovered my love for Java. That love led me into web development. I figured if I was going to make a project, web development was the easiest and most logical path.
      
      One driving force was a college friend who inspired me to study harder, pushing me to learn more and seek guidance when needed! 💡 Web development, though late in my college journey, opened doors to cross-platform mobile applications, where I’m now focusing.
      
      I’ve come to realize that this is what I enjoy doing. It’s not just a profession or a means to an end; it’s something I am truly passionate about! 🔥`,
      id: 2,
      image:'https://tse3.mm.bing.net/th?id=OIP.pRSPaYJvobMKnMdID45a9gAAAA&pid=Api&P=0&h=180',
    },
    {
      date: "Dec 24, 2023",
      title: "The Power of AI: A New Era of Learning",
      content:  `Artificial Intelligence (AI) is one of the most fascinating advancements in technology, and it has played a significant role in my journey as a developer! 🤖 Tools like ChatGPT, Microsoft AI, and GitHub Copilot have been game-changers for me. When I hit a wall in solving a bug or when endless searches on Google led nowhere, these AI tools became my saviors! 🙌

      I’ve used AI to help me with everything from debugging complex code to learning new languages. And while I’m still exploring the depths of AWS (S3 and EC2), Docker, and cloud computing, I know that AI is a field I want to dive deeper into in the future! 🌐 It’s incredible how AI helps optimize workflows, improve accuracy, and push boundaries in what we thought was possible.
      
      While there are always some regrets—like not focusing earlier on these emerging technologies—I believe in living in the present. Today is what I can control, and tomorrow is what I can prepare for! 🌟 Balancing my logical and creative sides, I continue to strive toward growth, knowing that the passion I have for technology will keep driving me forward! 🚀`,
      id: 3,
      image:'https://tse2.mm.bing.net/th?id=OIP.qvhcmd-GbCm7CDbfUmF9LAHaE8&pid=Api&P=0&h=180',
    },
    {
      date: "Dec 25, 2023",
      title: "Striking a Balance: Creativity Meets Logic in My Engineering Journey",
      content: `As someone with both a creative side (I love painting and sketching) and a logical side (engineering, coding), I’ve always found it challenging to balance these two aspects of my personality! 🎭 But over the years, I’ve realized that they complement each other perfectly. My creativity helps me solve problems in unique ways, while my logical side gives me the discipline and structure I need to succeed in software engineering. 💡

I believe that being both logical and creative helps me tackle stressful situations with a clearer mindset. Whether it’s a tough bug in the code or a complex design challenge, I know that with patience and creativity, there’s always a way forward! ✨

Being a software engineer is not just about writing code; it’s about designing solutions! And just like in art, it takes time, patience, and creativity to craft something truly meaningful! 🎨

Working on logic building and coding can sometimes be stressful, especially when bugs pile up or when the long hours in front of the screen start giving me headaches! 💻💥 When I feel overwhelmed, I turn to my creative side to spill out all the stress. 🎨 The colors flowing over the canvas give me a sense of satisfaction and freedom. Being near nature and having colors in my hand helps me reconnect with the earth and recharges me to head back into the battle again. 🍃✨ This gives me the challenge I thrive on and helps me maintain the balance within myself. 🧘‍♀️

These blogs reflect my journey, my challenges, and my passion for the field of technology. I hope to continue growing as both a software engineer and a creative individual, balancing these two forces to face the challenges ahead! 🌈`,
      id: 4,
      image:'/Ai_VS_Art.png',
    },
  ];

  const openBlog = (index) => {
    setSelectedBlog({ ...blogs[index], index });
  };

  const closeBlog = () => {
    setSelectedBlog(null);
  };

  // Handle the like functionality and persist to localStorage
  const likeBlog = (id) => {
    let updatedLikedBlogs = [...likedBlogs];
    if (updatedLikedBlogs.includes(id)) {
      updatedLikedBlogs = updatedLikedBlogs.filter((blogId) => blogId !== id);
    } else {
      updatedLikedBlogs.push(id);
    }
    setLikedBlogs(updatedLikedBlogs);
    localStorage.setItem("likedBlogs", JSON.stringify(updatedLikedBlogs));
  };

  useEffect(() => {
    // Load likes from localStorage on first render
    const storedLikes = JSON.parse(localStorage.getItem("likedBlogs")) || [];
    setLikedBlogs(storedLikes);
  }, []);

  return (
    <div id="blog-section">
      <section className="bg-gray-950 px-4 text-white dark:bg-dark py-auto px-auto h-auto">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold dark:text-white">Neha Sharma's Blog</h2>
            <p className="text-sm text-gray-400 mt-2">
              Wanna know me? What I found interesting, where I faced difficulty, and how I tackled those situations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((blog, index) => (
              <BlogCard
                key={blog.id}
                date={blog.date}
                title={blog.title}
                description={blog.content.substring(0, 100) + "..."}
                onClick={() => openBlog(index)}
                image={blog.image}
                isLiked={likedBlogs.includes(blog.id)}
                onLike={() => likeBlog(blog.id)}
              />
            ))}
          </div>

          {/* Modal to display the full blog */}
          {selectedBlog && (
            <BlogModal
              blog={selectedBlog}
              onClose={closeBlog}
              isLiked={likedBlogs.includes(selectedBlog.id)}
              onLike={() => likeBlog(selectedBlog.id)}
            />
          )}
        </div>
      </section>
    </div>
  );
};

// Blog Card Component
const BlogCard = ({ image, date, title, description, onClick, isLiked, onLike }) => {
  return (
    <div
      className="bg-gray-800 rounded-lg p-4 shadow-lg transition-transform hover:scale-105 cursor-pointer border-2 border-transparent hover:border-blue-500"
      onClick={onClick}
    >
      <img src={image} alt="blog" className="rounded-lg w-full h-40 object-cover mb-4" />
      <div>
        <span className="block bg-blue-500 text-xs text-white px-2 py-1 rounded mb-2">{date}</span>
        <h3 className="text-xl text-white mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
      <div className="flex items-center mt-4 justify-between">
        <img
          src={isLiked ? "https://img.icons8.com/ios-filled/50/fa314a/like.png" : "https://img.icons8.com/ios/50/like.png"}
          alt="like"
          className="w-8 h-8 cursor-pointer transition-transform hover:scale-125"
          onClick={(e) => {
            e.stopPropagation(); // Prevent opening modal when liking
            onLike();
          }}
        />
      </div>
    </div>
  );
};

// Blog Modal Component
const BlogModal = ({ blog, onClose, isLiked, onLike }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 ">
      <div className="bg-white text-black p-8 rounded-lg max-w-3xl w-full relative overflow-y-auto max-h-screen">
        <button
          className="absolute top-2 right-2 text-xl font-bold text-gray-600 hover:text-gray-900"
          onClick={onClose}
        >
          &times;
        </button>
        <div className="text-2xl font-semibold mb-4">{blog.title}</div>
        <div className="p-4 m-4 text-gray-700 mb-4">{blog.content}</div>
        <div className="flex justify-between items-center mt-4">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            onClick={onLike}
          >
            <img
              src={isLiked ? "https://img.icons8.com/ios-filled/50/fa314a/like.png" : "https://img.icons8.com/ios/50/like.png"}
              alt="like"
              className="w-8 h-8 inline-block"
            />
            <span className="ml-2">{isLiked ? "Liked" : "Like"}</span>
          </button>
          <button
            className="text-red-500 underline hover:text-red-700 transition"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
