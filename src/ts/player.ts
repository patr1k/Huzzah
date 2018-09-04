class Player
{
    id:   number;
    name: string;

    deck: Card[];

    public constructor(id: number, name: string)
    {
        this.id   = id;
        this.name = name;
    }

    public getId(): number
    {
        return this.id;
    }

    public getName(): string
    {
        return this.name;
    }
}