class Gardens extends Card implements Victory
{
    public getName(): string
    {
        return 'Gardens';
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

    }
}