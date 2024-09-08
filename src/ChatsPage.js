import { PrettyChatWindow } from 'react-chat-engine-pretty'

const ChatsPage = (props)=> {
    return (
        <div style={{ height:'100vh'}}>
            <PrettyChatWindow
                projectId='902ee088-17a8-43a4-b695-767e5b2d0804'
                username={props.user.username}
                secret={props.user.secret}
                style={{height: '100%'}}
            />
        </div>
    )
}

export default ChatsPage