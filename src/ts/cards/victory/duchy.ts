class Duchy extends Card implements Victory
{
    public getName(): string
    {
        return 'Duchy';
    }

    public getCardCount(): number
    {
        return 12;
    }

    public getCost(): number
    {
        return 5;
    }

    public getPoints(): number
    {
        return 3;
    }
}