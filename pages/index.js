import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons'
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations'

function ProfileSidebar(props) {
  return(
    <Box>
      <img src={ `https://github.com/${props.gitHubUser}.png` } style={{borderRadius:'8px'}}/>
    </Box>
  )
}

export default function Home() {

  const gitHubUser = 'wagaofc';
  const myFriends = ['justin1508','silasdearaujo', 'cristian-augusto', 'kelvyncosta', 'igorlacerdak', 'marceloromeiro'];

  return (
    <>
      <AlurakutMenu />
      <MainGrid>
        <div className="profileArea" style={{ gridArea: 'profileArea' }}>
          <ProfileSidebar gitHubUser={gitHubUser}/>
        </div>
        <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
          <Box>
            <h1 className="Title">
              Bem vindo(a)
            </h1>

            <OrkutNostalgicIconSet />

          </Box>
        </div>
        <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Meus Amigos ({myFriends.length})
            </h2>
            <ul>
              {myFriends.map((friend) => {
                return(
                  <li>
                    <a href={`/users/${friend}`} key={friend}>
                      <img src={`https://github.com/${friend}.png`} />
                      <span>{friend}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
          <Box>
            Comunidades
          </Box>
        </div>
      </MainGrid>
    </>
  )
}
