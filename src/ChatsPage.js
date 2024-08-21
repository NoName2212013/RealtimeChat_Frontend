import { PrettyChatWindow } from 'react-chat-engine-pretty'

const ChatsPage = (props)=> {
    return (
        <div style={{ height:'100vh'}}>
            <PrettyChatWindow
                projectId='8bde53a5-01fc-4e06-859f-650fefdfd53f'
                username={props.user.username}
                secret={props.user.secret}
                style={{height: '100%'}}
            />
        </div>
    )
}

export default ChatsPage