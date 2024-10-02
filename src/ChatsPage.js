import { PrettyChatWindow } from 'react-chat-engine-pretty'

const ChatsPage = (props)=> {
    return (
        <div style={{ height:'100vh'}}>
            <PrettyChatWindow
                projectId='62862a3a-fc8f-4253-a73a-741be0008210'
                username={props.user.username}
                secret={props.user.secret}
                style={{height: '100%'}}
            />
        </div>
    )
}

export default ChatsPage