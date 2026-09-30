namespace testeSenhaForte;

class Program
{
    static void Main(string[] args)
    {
        // Console.WriteLine("Hello, World!");
        testeJoinString();
    }

    public static void testeJoinString()
    {
        Console.WriteLine("Ola");

        // Source - https://stackoverflow.com/a/4841409
        // Posted by Dave Ward, modified by community. See post 'Timeline' for change history
        // Retrieved 2026-09-30, License - CC BY-SA 2.5

        string[] test = new string[2];

        test[0] = "Hello ";
        test[1] = "World!";

        string.Join("", test);

        Console.WriteLine(test);

    }
}
