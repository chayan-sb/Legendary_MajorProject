import Navbar from "../customs/navbar";
import  { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { useUser } from '@clerk/clerk-react';

function BlogDetails() {
  const [blog, setBlog] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [newReply, setNewReply] = useState('');
  const [activeReplyBox, setActiveReplyBox] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();
  const { user } = useUser();

  // Fetch blog and comments
  useEffect(() => {
    const fetchBlogAndComments = async () => {
      try {
        const [blogResponse, commentsResponse] = await Promise.all([
          axios.get(`http://localhost:5000/api/blogs/${id}`),
          axios.get(`http://localhost:5000/api/blogs/${id}/comments`)
        ]);

        setBlog(blogResponse.data);
        setComments(commentsResponse.data);
      } catch (err) {
        console.error('Error fetching blog or comments:', err);
      }
    };

    fetchBlogAndComments();
  }, [id]);

  // Function to handle blog deletion
  const handleDelete = async () => {
    const confirmed = window.confirm('Are you sure you want to delete this blog post?');
    if (confirmed) {
      try {
        await axios.delete(`http://localhost:5000/api/blogs/${blog._id}`);
        alert('Blog post deleted successfully!');
        navigate('/blogs');
      } catch (err) {
        console.error('Error deleting the blog post:', err);
        alert('There was an error deleting the blog post. Please try again.');
      }
    }
  };
  

  // Function to handle adding a new comment
  const handleAddComment = async () => {
    if (!newComment) return;

    try {
      const response = await axios.post(`http://localhost:5000/api/blogs/${id}/comments`, {
        author: user.fullName,
        content: newComment
      });
      setComments(prevComments => [...prevComments, response.data]);
      setNewComment('');
    } catch (err) {
      console.error('Error adding comment:', err);
    }
  };

  const handleAddReply = async (commentId) => {
    if (!newReply) return;
  
    try {
      const response = await axios.post(`http://localhost:5000/api/blogs/${id}/comments/${commentId}/replies`, {
        author: user.fullName,
        content: newReply
      });
  
      setComments(prevComments =>
        prevComments.map(comment => {
          if (comment._id === commentId) {
            return { ...comment, replies: [...(comment.replies || []), response.data] };
          }
          return comment;
        })
      );
      setNewReply('');
      setActiveReplyBox(null);
    } catch (err) {
      console.error('Error adding reply:', err);
    }
  };
  

  if (!blog) {
    return <div>Loading...</div>; // Show loading state
  }
//   console.log('Current user:', user.fullName);
// console.log('Blog author:', blog.author);
const isAuthor = user && user.fullName === blog.author; 
  return (
    <>
      <Navbar />
      <div
        className="details-box p-6 rounded-lg shadow-lg"
        style={{
          backgroundColor: '#f9fcfd',
          width: '80%',
          margin: '0 auto',
          marginTop: '30px'
        }}
      >
    <div className="upper-portion" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <h2 className="text-2xl font-bold text-gray-800">{blog.title}</h2>
      {isAuthor && ( // Show delete button only if the user is the author
        <div className="mt-4">
          <button
            onClick={handleDelete}
            className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition"
          >
            Delete Blog
          </button>
        </div>
      )}
    </div>

        <div className="flex items-center my-4">
          <img
            src={blog.imageUrl || 'https://via.placeholder.com/50'}
            alt={blog.title}
            className="w-12 h-12 rounded-full object-cover mr-4"
          />
          <p className="text-gray-600">By {blog.author} • {new Date(blog.datePosted).toLocaleDateString()}</p>
        </div>
        <p className="text-gray-700">{blog.content}</p>

        {/* Comment Section */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Comments:</h3>
          {comments.map(comment => (
            <div key={comment._id} className="mb-4">
              <p className="font-bold">{comment.author}</p>
              <p>{comment.content}</p>

              {/* Reply Section */}
              <button
                className="bg-blue-500 text-white hover:bg-blue-600 px-2 py-1 rounded-md text-sm"
                onClick={() => setActiveReplyBox(comment._id)}
              >
                Reply
              </button>

              {activeReplyBox === comment._id && (
                <div className="mt-2">
                  <input
                    type="text"
                    value={newReply}
                    onChange={(e) => setNewReply(e.target.value)}
                    placeholder="Write a reply..."
                    className="border border-gray-300 rounded p-2 w-full"
                  />
                  <button
                    onClick={() => handleAddReply(comment._id)}
                    className="bg-blue-600 text-white px-4 py-2 mt-2 rounded-md"
                  >
                    Submit Reply
                  </button>
                </div>
              )}

              {/* Show replies */}
              {comment.replies && comment.replies.map(reply => (
                <div key={reply._id} className="ml-4 mt-2 border-l pl-4">
                  <p className="font-bold">{reply.author}</p>
                  <p>{reply.content}</p>
                </div>
              ))}
            </div>
          ))}

          {/* Add New Comment */}
          <div className="mt-4">
            <input
              type="text"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Add a comment..."
              className="border border-gray-300 rounded p-2 w-full"
            />
            <button
              onClick={handleAddComment}
              className="bg-blue-600 text-white px-4 py-2 mt-2 rounded-md"
            >
              Submit Comment
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogDetails;
