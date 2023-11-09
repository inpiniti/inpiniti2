<template>
  <Column class="h-screen">
    <Header />
    <Nav />
    <Row>
      <Column>
        <Section />
        <Articel><slot /></Articel>
      </Column>
      <Aside />
    </Row>
    <Footer />
  </Column>
</template>
