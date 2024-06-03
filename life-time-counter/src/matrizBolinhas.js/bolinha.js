
export default function bolinha(linha,coluna) {
    console.log(linha,coluna);
    return (
        <div key={`${linha}-${coluna}`} className="bolinha"></div>
    );
}