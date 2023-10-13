
import PropTypes from 'prop-types'; 
import {FaBookmark} from 'react-icons/fa';

const Blog = ({blog,handleAddToBookmark, handleMarkAsRead}) => {
    const {title,cover,author,author_img,posted_data,reading_time,hashtags} = blog;
    return (
        <div className='mb-20 space-y-4'>
            <img className='w-full mb-32 ' src={cover} alt={`Cover picture of the title ${title}`} />
            <div className='flex justify-between'>
                
                <div className='flex'>
                    <img className='w-12' src={author_img} alt="" />
                    <div>
                        <h3 className="text-2xl">{author}</h3>
                        <p>{posted_data}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time}min read</span>
                    <button onClick={handleAddToBookmark} className='ml- text-2xl text-red-400'><FaBookmark /></button>
                </div>
            </div>
            <h1 className='text-4xl'>{title}</h1>
            <p>
                {
                    hashtags.map((hash,idx) => <samp key={idx}><a href=''>#</a></samp>)
                }
            </p>
            <button onClick={()=>handleMarkAsRead(id,reading_time)}
            className='text-purple-600 font-bold underline'>Mark As Read  </button>
            
        </div>
    );
};

Blog.protTypes = {
    blog:PropTypes.object.isRequired,
    handleAddToBookmark:PropTypes.func
}

export default Blog;