class Curse extends Card implements Victory
{
    public getName(): string
    {
        return 'Curse';
    }

    public getCardCount(): number
    {
        return 30;
    }

    public getCost(): number
    {
        return 0;
    }

    public getPoints(): number
    {
        return -1;
    }
}