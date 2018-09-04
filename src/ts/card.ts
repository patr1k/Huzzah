abstract class Card
{
    player: Player;

    protected constructor()
    {

    }

    abstract getName(): string;
    abstract getCardCount(): number;
    abstract getCost(): number;
}