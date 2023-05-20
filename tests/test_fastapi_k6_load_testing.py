from fastapi_k6_load_testing import __version__


def test_version():
    assert __version__ == '0.1.0'
