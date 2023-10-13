import PropTypes from 'prop-types'

const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div className='bg-slate-200 p-4 m-4'>
            <h3 className='text-2xl rounded-sm-xl'>{title}</h3>
            
        </div>
    );
};

Bookmark.protoType ={
    bookmark:PropTypes.object
}

export default Bookmark;