class Estate extends Card implements Victory
{
    public getName(): string
    {
        return 'Estate';
    }

    public getCardCount(): number
    {
        return 25;
    }

    public getCost(): number
    {
        return 3;
    }

    public getPoints(): number
    {
        return 1;
    }
}