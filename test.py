def test():
    primes = []
    if not primes:
        print "no primes"
    else:
        print "primes"

    primes = primes + [1]

    if primes:
        print "now there are primes"

if __name__ == '__main__':
    test()
