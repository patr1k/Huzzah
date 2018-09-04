class Province extends Card implements Victory
{
    public getName(): string
    {
        return 'Province';
    }

    public getCardCount(): number
    {
        return 12;
    }

    public getCost(): number
    {
        return 8;
    }

    public getPoints(): number
    {
        return 6;
    }
}