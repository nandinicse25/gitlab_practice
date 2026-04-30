"""Application entrypoint."""


def get_message() -> str:
    """Return a startup message for the application."""
    return "Hello from gitlab_practice!"


def main() -> None:
    """Run the application."""
    print(get_message())


if __name__ == "__main__":
    main()
