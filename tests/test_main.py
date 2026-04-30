from app.main import get_message


def test_get_message() -> None:
    assert get_message() == "Hello from gitlab_practice!"
