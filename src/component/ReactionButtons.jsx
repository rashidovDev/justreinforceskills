import { useDispatch } from "react-redux";
import { reactionAdded } from "../store/slice/postsSlice";

const reactionEmoji = {
    thumsUp : '👍',
    wow : '😯',
    heart : '❤️',
    smile : '😂',
}

const ReactionButtons = ({post}) => {
    const dispatch = useDispatch()

    const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => (
     <button 
     key = {name}
     type = 'button'
     className="mr-2"
     onClick={() => dispatch(reactionAdded({ postId : post.id, reaction : name }))  }
     >
     {emoji}{post.reactions[name]}
     </button>
    )
)
  return (
    <div>{reactionButtons}</div>
  )
}

export default ReactionButtons