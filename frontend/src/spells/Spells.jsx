import Container from 'react-bootstrap/Container';

export default function Spells({solutions}) {
    return(
        <>
        {Array.from(solutions, (sol, i) => (
            <Container className='shadow'>
                <h1 className='text-center'>#{i + 1}: {sol.title}</h1>
                <p className='text-center'>{sol.description}</p>
                <pre className='text-left'>{sol.code}</pre>
                <Container className='w-75 text-center'>
                <p><b>Time Complexity:</b> {sol.time}</p>
                <p><b>Space Complexity:</b> {sol.space}</p>
                </Container>
                
            </Container>
        ))}
        </>
    )
}
