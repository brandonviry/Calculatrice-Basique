interface DisplayProps {
    children: React.ReactNode
}

export default function Display({children}: DisplayProps) {
    return (
        <div className="display" style={{
            backgroundColor: '#f0f0f0',
            border: '2px solid #ccc',
            borderRadius: '8px',
            padding: '10px',
            margin: '10px 0',
            textAlign: 'right',
            fontSize: '24px',
            fontWeight: 'bold',
            minHeight: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            minWidth:'100%'
        }}>
            {children}
        </div>
    )
}