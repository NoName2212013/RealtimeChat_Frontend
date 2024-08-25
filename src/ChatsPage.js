import { PrettyChatWindow } from 'react-chat-engine-pretty'

const ChatsPage = (props)=> {
    return (
        <div style={{ height:'100vh'}}>
            <PrettyChatWindow
                projectId='44f8e13c-d40e-4ff5-957c-1df4c15fe38f'
                username={props.user.username}
                secret={props.user.secret}
                style={{height: '100%'}}
            />
        </div>
    )
}

export default ChatsPage